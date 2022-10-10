import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';

import { LoggerProvider } from '@ip-library/common/logger';
import { MockProvider } from '@ip-library/providers';

const log = new LoggerProvider('AppComponent');

@Component({
	selector: 'ip-root',
	templateUrl: './app.html',
	styleUrls: ['./app.scss']
})
export class AppComponent {
	public appMainTitle = 'Interview Project But With Cats';
	public appMainHeaderTitle = 'Interview Project But With Cats';
	public showProgressBar!: boolean;
	public initializationComplete!: boolean;

	constructor(
		public mock: MockProvider,
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) {
		this._initializeApp();
	}

	private _initializeApp() {
		this._subscribeNavigationEvents();
		this._subscribeProgressBarEvents();
	}

	private _subscribeProgressBarEvents() {
		this.mock.loading.pipe(
			distinctUntilChanged(),
		).subscribe(
			(changedValue) => {
				setTimeout(() => {
					this.showProgressBar = changedValue;
				}, 0);
			},
			(err) => {
				log.error('Error during progress bar value change', err);
			}
		);
	}

	private _subscribeNavigationEvents() {
		this._router.events
			.pipe(
				filter((event: any) => event instanceof NavigationEnd),
				map((event: NavigationEnd) => {
					let route = this._activatedRoute.firstChild;
					let child = route;

					while (child) {
						if (child.firstChild) {
							child = child.firstChild;
							route = child;
						} else {
							child = null;
						}
					}

					return {
						url: event.url,
						route,
					};
				})
			)
			.subscribe((event) => {
				const navigationItem = {
					url: event?.url,
					params: event?.route?.snapshot?.paramMap,
					queryParams: event?.route?.snapshot?.queryParamMap,
				};

				const title = navigationItem.queryParams?.get('productName') ?? this.appMainTitle;
				const htmlHeadEl = document.getElementsByTagName('head').item(0);
				const pageTitleEl = htmlHeadEl?.getElementsByTagName('title').item(0);

				if(pageTitleEl) {
					if(navigationItem.url?.includes('cat-details')) {
						pageTitleEl.innerHTML = title;

						this.appMainHeaderTitle = title;
					} else {
						pageTitleEl.innerHTML = this.appMainTitle;

						this.appMainHeaderTitle = title;
					}
				}
			});
	}
}
