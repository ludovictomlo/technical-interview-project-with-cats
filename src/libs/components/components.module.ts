import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { IpPipesModule } from '@ip-library/pipes/pipes.module';

import { IconComponent } from './icon/icon';
import { MenuComponent } from './menu/menu';
import { CatCardComponent } from './cat-card/cat-card';

@NgModule({
	declarations: [
		IconComponent,
		MenuComponent,
		CatCardComponent,
	],
	entryComponents: [],
	exports: [
		IconComponent,
		MenuComponent,
		CatCardComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		IpPipesModule,
		MatCardModule,
	],
})
export class IpComponentsModule {}
