import { Pipe } from '@angular/core';

@Pipe({name: 'price'})
export class PricePipe {
	constructor() {}
	transform(value: number, currency = ''): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency?.length > 0 ? currency : 'USD',
		}).format(value);
	}
}
