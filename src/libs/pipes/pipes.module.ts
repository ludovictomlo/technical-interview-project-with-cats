import { NgModule } from '@angular/core';

import { CatThumbnailPipe } from './cat-thumbnail.pipe';
import { PricePipe } from './price.pipe';

@NgModule({
	imports: [],
	declarations: [
		CatThumbnailPipe,
		PricePipe
	],
	exports: [
		CatThumbnailPipe,
		PricePipe
	],
})
export class IpPipesModule { }
