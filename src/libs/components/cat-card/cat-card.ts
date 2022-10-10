import { Component, Input } from '@angular/core';

import { LoggerProvider } from '@ip-library/common/logger';

import { ICat } from '@ip-library/common/globalInterfaces';

const log = new LoggerProvider('CatCardComponent');

@Component({
	selector: 'ip-cat-card',
	templateUrl: './cat-card.html',
	styleUrls: ['./cat-card.scss'],
})
export class CatCardComponent {
	@Input() public item!: ICat;

	constructor() {}
}
