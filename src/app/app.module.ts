import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppComponent } from './app.component';

// layouts
import * as fromLayouts from './layouts';
import { RouterModule, Routes } from '@angular/router';

// this would be done dynamically with webpack for builds
const environment = {
	development: true,
	production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
	? [storeFreeze]
	: [];

// routes
export const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'words' },
	{
		path: 'words',
		loadChildren: './modules/words/words.module#WordsModule',
	},
];

@NgModule({
	declarations: [
		AppComponent,
		...fromLayouts.layouts
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		StoreModule.forRoot({}, { metaReducers }),
		EffectsModule.forRoot([]),
		environment.development ? StoreDevtoolsModule.instrument() : [],
	],
	providers: [],
	exports: [...fromLayouts.layouts],
	bootstrap: [AppComponent]
})
export class AppModule { }
