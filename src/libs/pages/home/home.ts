import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { LoggerProvider } from '@ip-library/common/logger';
import { MockProvider } from '@ip-library/providers';

import { ICat, IPaginatedListResponse } from '@ip-library/common/globalInterfaces';

const log = new LoggerProvider('HomePage');

@Component({
	selector: 'ip-home-page',
	templateUrl: './home.html',
	styleUrls: ['./home.scss'],
})
export class HomePage implements OnInit, OnDestroy {
	@HostBinding('class.page') public isPage = true;
	public searchForm!: FormGroup;
	public catsList!: IPaginatedListResponse<ICat>;
	public disableInfiniteScroll = false;

	private _searchQuerySubscription!: Subscription|undefined;
	private _searchCoatTypeSubscription!: Subscription|undefined;
	private _searchSortingSubscription!: Subscription|undefined;
	private _searchPriceSubscription!: Subscription|undefined;

	constructor(
		private _mock: MockProvider,
		private _formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this._initSearchForm();
		this._subscribeToFormChanges();
		this.loadCats(false, true);
	}

	ngOnDestroy() {
		this._unsubscribeToFormChanges();
	}

	private _initSearchForm() {
		this.searchForm = this._formBuilder.group({
			query: [null],
			coatType: [null],
			sorting: [null],
			priceMin: [null],
			priceMax: [null]
		});
	}

	private _subscribeToFormChanges() {
		this._searchQuerySubscription = this.searchForm.get('query')?.valueChanges
			.pipe(
				debounceTime(300),
			)
			.subscribe(
				(change) => {
					log.info('Query changed: ', change);
					this.loadCats();
				},
				(err) => {
					log.error('Error during search query change', err);
				}
			);
		this._searchCoatTypeSubscription = this.searchForm.get('coatType')?.valueChanges
			.subscribe(
				(change) => {
					log.info('CoatType changed: ', change);
					this.loadCats();
				},
				(err) => {
					log.error('Error during search coat type change', err);
				}
			);
		this._searchSortingSubscription = this.searchForm.get('sorting')?.valueChanges
			.subscribe(
				(change) => {
					log.info('Sorting changed: ', change);
					this.loadCats();
				},
				(err) => {
					log.error('Error during search sorting change', err);
				}
			);
		this._searchPriceSubscription = this.searchForm.get('priceMin')?.valueChanges
			.pipe(
				debounceTime(300),
			)
			.subscribe(
				(change) => {
					log.info('Price min changed: ', change);
					this.loadCats();
				},
				(err) => {
					log.error('Error during search price min. change', err);
				}
			);
		this._searchPriceSubscription = this.searchForm.get('priceMax')?.valueChanges
			.pipe(
				debounceTime(300),
			)
			.subscribe(
				(change) => {
					log.info('Price max changed: ', change);
					this.loadCats();
				},
				(err) => {
					log.error('Error during search price max. change', err);
				}
			);
	}

	private _unsubscribeToFormChanges() {
		if(this._searchQuerySubscription) {
			this._searchQuerySubscription.unsubscribe();
		}
		if(this._searchCoatTypeSubscription) {
			this._searchCoatTypeSubscription.unsubscribe();
		}
		if(this._searchSortingSubscription) {
			this._searchSortingSubscription.unsubscribe();
		}
		if(this._searchPriceSubscription) {
			this._searchPriceSubscription.unsubscribe();
		}
	}

	public get priceMin() {
		return this.catsList?.filters?.price?.min;
	}
	public get priceMax() {
		return this.catsList?.filters?.price?.max;
	}

	public formatPriceLabel(value: number): string {
		return `$${value}`;
	}

	public onScroll() {
		this.loadCats(true);
	}

	public loadCats(loadNextPage = false, firstLoad = false) {
		let page = 1;

		if(
			loadNextPage &&
			this.catsList &&
			this.catsList.lastPage === false &&
			this.catsList.page &&
			this.catsList.page > 0
		) {
			page = this.catsList.page + 1;
		}
		this._mock.getCats({
			page,
			sorting: this.searchForm.get('sorting')?.value,
			filters: {
				query: this.searchForm.get('query')?.value,
				coatType: this.searchForm.get('coatType')?.value,
				price: {
					min: this.searchForm.get('priceMin')?.value,
					max: this.searchForm.get('priceMax')?.value,
				},
			}
		}).toPromise()
			.then((res) => {
				log.info('Cats loaded', res);
				const elements = loadNextPage ? [
					... this.catsList.elements,
					... res.elements
				] : res.elements;

				this.catsList = {
					... res,
					elements,
				};

				if(firstLoad) {
					this.searchForm.get('priceMin')?.setValue(res.filters?.price?.min, {
						emitEvent: false
					});
					this.searchForm.get('priceMax')?.setValue(res.filters?.price?.max, {
						emitEvent: false
					});
					this.searchForm.get('sorting')?.setValue(res.sorting, {
						emitEvent: false
					});
				}

				this.disableInfiniteScroll = res.lastPage;

				this._mock.loading.next(false);
			})
			.catch((err) => {
				log.error('Error loading cats', err);
			});
	}
}
