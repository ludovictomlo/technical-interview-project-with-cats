import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app';

import { MockProvider } from '@ip-library/providers';

import { IpComponentsModule } from '@ip-library/components/components.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		IpComponentsModule,
		MatProgressBarModule,
		InfiniteScrollModule
	],
	providers: [
		{
			deps: [HttpClient],
			provide: MockProvider,
			useClass: MockProvider,
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
