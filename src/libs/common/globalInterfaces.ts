import { TSorting } from "./globalTypes";

export interface ICat {
	name: string;
	id: string;
	description: string;
	coatType: string;
	imageUrls: string[];
	price: number;
}

export interface IMockResponse {
	[key: string]: any;
}

export interface IPaginatedListRequest {
	page?: number;
	pageSize?: number;
	sorting?: TSorting;
	filters?: {
		query?: string;
		coatType?: string;
		price?: {
			min: number;
			max: number;
		};
	}|null;
}

export interface IPaginatedListResponse<T> extends IPaginatedListRequest {
	elements: T[];
	lastPage: boolean;
	aggregations: {
		[key: string]: any[];
	};
	total: number;
}

export interface IMockError {
	code: number;
	message: string;
}
