import { Pipe } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import { ICat } from '@ip-library/common/globalInterfaces';

@Pipe({name: 'thumbnail'})
export class CatThumbnailPipe {
	constructor(private _sanitizer: DomSanitizer) {}
	transform(value: ICat): SafeHtml {
		return this._sanitizer.bypassSecurityTrustResourceUrl(value.imageUrls[0]) ?? '';
	}
}
