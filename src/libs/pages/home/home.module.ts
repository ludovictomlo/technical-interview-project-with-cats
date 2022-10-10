import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material-experimental/mdc-slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomePage } from './home';
import { IpComponentsModule } from '@ip-library/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IpComponentsModule,
		MatInputModule,
		MatSelectModule,
		MatSliderModule,
		MatGridListModule,
		InfiniteScrollModule,
		RouterModule.forChild([{ path: '', component: HomePage }]),
	],
	declarations: [ HomePage ],
})
export class HomePageModule { }
