import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ZipcodeEntryComponent} from './features/zipcode-entry/zipcode-entry.component';
import {LocationService} from "./core/services/location.service";
import {ForecastsListComponent} from './features/forecasts-list/forecasts-list.component';
import {CurrentConditionsComponent} from './features/current-conditions/current-conditions.component';
import {MainPageComponent} from './features/main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {SharedModule} from "./shared/shared.module";
import {HttpCacheInterceptor} from "./core/interceptors/HttpCacheInterceptor";
import {CacheConfigurationComponent} from './features/cache-configuration/cache-configuration.component';
import {StoreModule} from '@ngrx/store';
import {LOCATION_FEATURE_KEY} from "./store/locations/locations.states";
import {locationReducer} from "./store/locations/locations.reducer";
import {EffectsModule} from '@ngrx/effects';
import {LocationsEffects} from "./store/locations/locations.effects";

@NgModule({
    declarations: [
        AppComponent,
        ZipcodeEntryComponent,
        ForecastsListComponent,
        CurrentConditionsComponent,
        MainPageComponent,
        CacheConfigurationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        routing,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        SharedModule,
        StoreModule.forRoot({[LOCATION_FEATURE_KEY]: locationReducer}),

        EffectsModule.forRoot([LocationsEffects])
    ],
    providers: [
        LocationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpCacheInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
