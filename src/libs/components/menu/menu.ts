import { Component, Input } from '@angular/core';

import { LoggerProvider } from '@ip-library/common/logger';

const log = new LoggerProvider('MenuComponent');

@Component({
	selector: 'ip-menu',
	templateUrl: './menu.html',
	styleUrls: ['./menu.scss'],
})
export class MenuComponent {
	@Input() public title = '';

	constructor() {}
}
