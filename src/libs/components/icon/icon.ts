import { Component, Input } from '@angular/core';

import { LoggerProvider } from '@ip-library/common/logger';

const log = new LoggerProvider('IconComponent');

@Component({
	selector: 'ip-icon',
	templateUrl: './icon.html',
	styleUrls: ['./icon.scss'],
})
export class IconComponent {
	@Input() public name!: string;
	@Input() public src!: string;
	@Input() public type: 'solid'|'regular'|'brand'|'custom' = 'solid';
	@Input() public color = 'var(--color-primary)';

	constructor() {}

	public get iconSrc(): string {
		if(this.src?.length > 0) {
			return `/assets/custom-icon/${this.src}`;
		}

		return '';
	}

	public get iconClass(): string {
		switch (this.type) {
			case 'solid':
				return `fas fa-${this.name}`;
			case 'regular':
				return `far fa-${this.name}`;
			case 'brand':
				return `fab fa-${this.name}`;
			case 'custom':
				return `custom-icon`;
			default:
				return '';
		}
	}
}
