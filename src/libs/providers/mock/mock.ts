import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import mocksJson from './mocks-json';

import { LoggerProvider } from '@ip-library/common/logger';
import { randomNumber } from '@ip-library/common/utils';
import {
	ICat,
	IMockError,
	IMockResponse,
	IPaginatedListRequest,
	IPaginatedListResponse
} from '@ip-library/common/globalInterfaces';

import { DEFAULT_LIST_PAGE_SIZE, DEFAULT_LIST_SORTING } from '@ip-library/common/constants';

const log = new LoggerProvider('MockProvider');

@Injectable()
export class MockProvider {
	public mockResponses: IMockResponse = {};
	public loading: Subject<boolean> = new Subject();

	public constructor() {
		this.mockResponses = mocksJson;
	}

	private _getObservableListFromMock<T>(
		property: string,
		payload: IPaginatedListRequest
	): Observable<IPaginatedListResponse<T>> {
		const delayTime = randomNumber(0, 3000);
		log.info(`Response delayed by ${delayTime}ms`);
		return of<T[]>(this.mockResponses[property]).pipe(
			map((res) => {
				const getMaxPrice = (list: T[]) => {
					return Math.max(...list.map((o: any) => o?.price));
				};
				let formattedRes: IPaginatedListResponse<T> = {
					elements: res,
					page: 1,
					pageSize: DEFAULT_LIST_PAGE_SIZE,
					lastPage: false,
					sorting: DEFAULT_LIST_SORTING,
					filters: {
						query: '',
						coatType: '',
						price: {
							min: 0,
							max: getMaxPrice(res)
						}
					},
					aggregations: {
						coatTypes: [
							... new Set(
								res.map((r: any) => r.coatType).sort((a: any, b: any) => a.localeCompare(b))
							)
						],
						sortings: [
							{
								key: 'Recommended',
								value: 'recommended'
							},
							{
								key: 'Name ascending',
								value: 'name_asc'
							},
							{
								key: 'Name descending',
								value: 'name_desc'
							},
							{
								key: 'Price ascending',
								value: 'price_asc'
							},
							{
								key: 'Price descending',
								value: 'price_desc'
							},
						]
					},
					total: res.length,
				};

				if(
					typeof payload.filters?.query === 'string' &&
					payload.filters.query.length > 0
				) {
					formattedRes = {
						... formattedRes,
						elements: formattedRes.elements?.filter((s: any) =>
							s.name.toLowerCase()?.includes(payload.filters?.query?.toLowerCase()) ||
							s.description.toLowerCase()?.includes(payload.filters?.query?.toLowerCase())
						),
						filters: {
							... formattedRes.filters,
							query: payload.filters.query,
						}
					};
				}
				if(
					typeof payload.filters?.coatType === 'string' &&
					payload.filters.coatType.length > 0 &&
					payload.filters.coatType.toLowerCase() !== 'all'
				) {
					formattedRes = {
						... formattedRes,
						elements: formattedRes.elements?.filter((s: any) =>
							s.coatType.toLowerCase() === payload.filters?.coatType?.toLowerCase()
						),
						filters: {
							... formattedRes.filters,
							coatType: payload.filters.coatType,
						}
					};
				}
				if(
					typeof payload.filters?.price?.min === 'number' &&
					payload.filters.price.min > 0
				) {
					formattedRes = {
						... formattedRes,
						elements: formattedRes.elements?.filter((s: any) =>
							typeof payload.filters?.price?.min === 'number' && s.price >= payload.filters.price.min
						),
					};
				}
				if(
					typeof payload.filters?.price?.max === 'number' &&
					payload.filters.price.max > 0
				) {
					formattedRes = {
						... formattedRes,
						elements: formattedRes.elements?.filter((s: any) =>
							typeof payload.filters?.price?.max === 'number' && s.price <= payload.filters.price.max
						),
					};
				}
				if(
					typeof payload.sorting === 'string' &&
					payload.sorting.length > 0
				) {
					switch(payload.sorting) {
						case 'name_asc':
							formattedRes = {
								... formattedRes,
								elements: formattedRes.elements.sort((a: any, b: any) => a.name.localeCompare(b.name)),
								sorting: payload.sorting,
							};
							break;
						case 'name_desc':
							formattedRes = {
								... formattedRes,
								elements: formattedRes.elements.sort((a: any, b: any) => b.name.localeCompare(a.name)),
								sorting: payload.sorting,
							};
							break;
						case 'price_asc':
							formattedRes = {
								... formattedRes,
								elements: formattedRes.elements.sort((a: any, b: any) => a.price - b.price),
								sorting: payload.sorting,
							};
							break;
						case 'price_desc':
							formattedRes = {
								... formattedRes,
								elements: formattedRes.elements.sort((a: any, b: any) => b.price - a.price),
								sorting: payload.sorting,
							};
							break;
					}
				}
				if(
					typeof payload.pageSize === 'number' &&
					payload.pageSize > 0
				) {
					formattedRes = {
						... formattedRes,
						pageSize: payload.pageSize
					};
				}
				if(
					typeof payload.page === 'number' &&
					payload.page > 0
				) {
					formattedRes = {
						... formattedRes,
						page: payload.page
					};
				}

				let startIdx: number;
				let endIdx: number;
				if(
					typeof formattedRes.page === 'number' &&
					typeof formattedRes.pageSize === 'number' &&
					formattedRes.page > 1
				) {
					startIdx = (formattedRes.page * formattedRes.pageSize) - formattedRes.pageSize;
				} else {
					startIdx = 0;
				}
				if(
					typeof formattedRes.page === 'number' &&
					typeof formattedRes.pageSize === 'number' &&
					formattedRes.page > 1
				) {
					endIdx = formattedRes.page * formattedRes.pageSize;
				} else {
					endIdx = typeof formattedRes.pageSize === 'number'
						? formattedRes.pageSize : formattedRes.elements.length;
				}
				const currentPageElements = formattedRes.elements.slice(startIdx, endIdx);

				formattedRes = {
					... formattedRes,
					elements: currentPageElements,
					lastPage: formattedRes.elements.length - endIdx > 0 ? false : true,
					total: formattedRes.elements.length
				};

				return formattedRes;
			}),
			delay(delayTime)
		);
	}

	private _getObservableSingleFromMock<T>(
		property: string,
		id: string
	): Observable<T|IMockError> {
		const delayTime = randomNumber(0, 3000);
		log.info(`Response delayed by ${delayTime}ms`);
		return of<T[]>(this.mockResponses[property]).pipe(
			map((res) => {
				const item = res?.find((s: any) => s.id === id);

				return item ? item : {
					code: 404,
					message: 'Not found'
				};
			}),
			delay(delayTime)
		);
	}

	// Mock requests below

	public getCats(payload: IPaginatedListRequest): Observable<IPaginatedListResponse<ICat>> {
		this.loading.next(true);
		return this._getObservableListFromMock<ICat>('cats', payload);
	}

	public getCat(id: string): Observable<ICat|IMockError> {
		this.loading.next(true);
		return this._getObservableSingleFromMock<ICat>('cats', id);
	}
}
