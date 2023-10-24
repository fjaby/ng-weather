(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _features_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/zipcode-entry/zipcode-entry.component */ 9123);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/location.service */ 4107);
/* harmony import */ var _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.component */ 5563);
/* harmony import */ var _features_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/current-conditions/current-conditions.component */ 5965);
/* harmony import */ var _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/main-page/main-page.component */ 5259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _core_interceptors_HttpCacheInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/HttpCacheInterceptor */ 5493);
/* harmony import */ var _features_cache_configuration_cache_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/cache-configuration/cache-configuration.component */ 551);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_locations_locations_states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/locations/locations.states */ 4033);
/* harmony import */ var _store_locations_locations_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/locations/locations.reducer */ 3969);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _store_locations_locations_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/locations/locations.effects */ 3183);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _features_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _features_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_4__.CurrentConditionsComponent, _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__.MainPageComponent, _features_cache_configuration_cache_configuration_component__WEBPACK_IMPORTED_MODULE_10__.CacheConfigurationComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_6__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production
  }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forRoot({
    [_store_locations_locations_states__WEBPACK_IMPORTED_MODULE_11__.LOCATION_FEATURE_KEY]: _store_locations_locations_reducer__WEBPACK_IMPORTED_MODULE_12__.locationReducer
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsModule.forRoot([_store_locations_locations_effects__WEBPACK_IMPORTED_MODULE_13__.LocationsEffects])],
  providers: [_core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_HttpCacheInterceptor__WEBPACK_IMPORTED_MODULE_9__.HttpCacheInterceptor,
    multi: true
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.component */ 5563);
/* harmony import */ var _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/main-page/main-page.component */ 5259);



const appRoutes = [{
  path: '',
  component: _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 5493:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/HttpCacheInterceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHE_ACTIVATED: () => (/* binding */ CACHE_ACTIVATED),
/* harmony export */   HttpCacheInterceptor: () => (/* binding */ HttpCacheInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cache.service */ 26);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const CACHE_ACTIVATED = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContextToken(() => false);
let HttpCacheInterceptor = class HttpCacheInterceptor {
  constructor() {
    this.cacheServices = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService);
  }
  intercept(req, next) {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    const activated = req.context.get(CACHE_ACTIVATED);
    if (!activated) {
      return next.handle(req);
    }
    const cacheResponse = this.cacheServices.request(req.url);
    // Object.assign(cacheResponse, this.cacheServices.request(req.url));
    if (cacheResponse) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse({
        body: cacheResponse.body
      }));
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
        this.cacheServices.cache(req.url, response);
      }
    }));
  }
};
HttpCacheInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], HttpCacheInterceptor);


/***/ }),

/***/ 26:
/*!************************************************!*\
  !*** ./src/app/core/services/cache.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CacheService = class CacheService {
  constructor() {
    this._timeToLive = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(720000);
  }
  get timeToLiveValue() {
    return this._timeToLive();
  }
  set timeToLiveValue(newVal) {
    this._timeToLive.set(newVal);
  }
  // get the data associated to the key.
  request(key) {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (parsedData.expiresAt >= new Date().getTime()) {
        return parsedData.data;
      } else {
        this.remove(key);
      }
    }
    return null;
  }
  // Save data on local storage with a key.
  cache(key, data) {
    const expirationTime = new Date().getTime() + this._timeToLive();
    const cachedData = {
      data: data,
      expiresAt: expirationTime,
      timetoLive: this._timeToLive()
    };
    localStorage.setItem(key, JSON.stringify(cachedData));
  }
  // Remove data from local storage
  remove(key) {
    localStorage.removeItem(key);
  }
  static #_ = this.ctorParameters = () => [];
};
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], CacheService);


/***/ }),

/***/ 4107:
/*!***************************************************!*\
  !*** ./src/app/core/services/location.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/locations/locations.actions */ 5131);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = "locations";
let LocationService = class LocationService {
  constructor(store) {
    this.store = store;
    this.locations = [];
  }
  loadLocation() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
      for (let loc of this.locations) {
        this.store.dispatch((0,_store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_0__.addLocation)({
          zipcode: loc
        }));
      }
    }
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
  }
  addLocation(zipcode) {
    if (!this.locations.includes(zipcode)) {
      this.locations.push(zipcode);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }
  }
  removeLocation(zipcode) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store
  }];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 4323:
/*!**************************************************!*\
  !*** ./src/app/core/services/weather.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _interceptors_HttpCacheInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/HttpCacheInterceptor */ 5493);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7422);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;




let WeatherService = WeatherService_1 = class WeatherService {
  static #_ = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_2 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_3 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http) {
    this.http = http;
  }
  getCurrentConditions(zipcode) {
    let context = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContext();
    context.set(_interceptors_HttpCacheInterceptor__WEBPACK_IMPORTED_MODULE_0__.CACHE_ACTIVATED, true);
    return this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=metric&APPID=${WeatherService_1.APPID}`, {
      context
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => ({
      zip: zipcode,
      data
    })));
  }
  getForecast(zipcode) {
    let context = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContext();
    context.set(_interceptors_HttpCacheInterceptor__WEBPACK_IMPORTED_MODULE_0__.CACHE_ACTIVATED, true);
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=metric&cnt=5&APPID=${WeatherService_1.APPID}`, {
      context
    });
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
  static #_4 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], WeatherService);


/***/ }),

/***/ 551:
/*!*******************************************************************************!*\
  !*** ./src/app/features/cache-configuration/cache-configuration.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheConfigurationComponent: () => (/* binding */ CacheConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _cache_configuration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-configuration.component.html?ngResource */ 8455);
/* harmony import */ var _cache_configuration_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache-configuration.component.css?ngResource */ 3859);
/* harmony import */ var _cache_configuration_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cache_configuration_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/cache.service */ 26);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let CacheConfigurationComponent = class CacheConfigurationComponent {
  constructor() {
    this.cacheService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services_cache_service__WEBPACK_IMPORTED_MODULE_2__.CacheService);
    this.timetoLiveValue = this.cacheService.timeToLiveValue / 1000;
  }
  setTimeToLive(value) {
    let val = Number(value);
    if (val !== Number.NaN) {
      this.cacheService.timeToLiveValue = val * 1000;
    } else if (val < 0) {
      this.cacheService.timeToLiveValue = 0;
    }
  }
};
CacheConfigurationComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-cache-configuration',
  template: _cache_configuration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  styles: [(_cache_configuration_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CacheConfigurationComponent);


/***/ }),

/***/ 5965:
/*!*****************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9009);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 6498);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/weather.service */ 4323);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/location.service */ 4107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_locations_locations_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/locations/locations.selector */ 604);
/* harmony import */ var _store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/locations/locations.actions */ 5131);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.store.selectSignal(_store_locations_locations_selector__WEBPACK_IMPORTED_MODULE_4__.locationsSelector);
  }
  removeLocation(zipcode) {
    this.store.dispatch((0,_store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_5__.removeLocation)({
      zipcode
    }));
  }
  ngOnInit() {
    this.locationService.loadLocation();
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 5563:
/*!*********************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 8269);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 4204);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/weather.service */ 4323);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.forecast$ = weatherService.getForecast(this.zipcode);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _core_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 5259:
/*!***********************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 9123:
/*!*******************************************************************!*\
  !*** ./src/app/features/zipcode-entry/zipcode-entry.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var app_store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/store/locations/locations.actions */ 5131);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(store) {
    this.store = store;
  }
  addLocation(zipcode) {
    this.store.dispatch((0,app_store_locations_locations_actions__WEBPACK_IMPORTED_MODULE_1__.addLocation)({
      zipcode
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 766:
/*!************************************************************!*\
  !*** ./src/app/shared/directive/numbers-only.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumbersOnlyDirective: () => (/* binding */ NumbersOnlyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NumbersOnlyDirective = class NumbersOnlyDirective {
  constructor(_el) {
    this._el = _el;
    this.regexStr = '^[0-9]+$';
  }
  onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }
  onPaste(event) {
    this.validateFields(event);
  }
  onBlur(event) {
    event.preventDefault();
    if (!this._el.nativeElement.value) {
      this._el.nativeElement.value = 0;
    }
  }
  validateFields(event) {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text/plain').replace(/[^0-9]/g, '');
    document.execCommand('insertHTML', false, pasteData);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }];
  static #_2 = this.propDecorators = {
    onKeyPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keypress', ['$event']]
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['paste', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur', ['$event']]
    }]
  };
};
NumbersOnlyDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appNumbersOnly]'
})], NumbersOnlyDirective);


/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/tabs/tabs.component */ 7070);
/* harmony import */ var _tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tab/tab.component */ 7842);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackbar/snackbar.component */ 4187);
/* harmony import */ var _tabs_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tab-header/tab-header.component */ 2642);
/* harmony import */ var _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/numbers-only.directive */ 766);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let SharedModule = class SharedModule {};
SharedModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent, _tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__.TabComponent, _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, _tabs_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_3__.TabHeaderComponent, _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__.NumbersOnlyDirective],
  exports: [_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent, _tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__.TabComponent, _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__.NumbersOnlyDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
})], SharedModule);


/***/ }),

/***/ 4187:
/*!*******************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarComponent: () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _snackbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.component.html?ngResource */ 2174);
/* harmony import */ var _snackbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.component.css?ngResource */ 9386);
/* harmony import */ var _snackbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snackbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackbar.service */ 5652);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SnackbarComponent = class SnackbarComponent {
  constructor(snackbarService) {
    this.snackbarService = snackbarService;
    this.show = false;
    this.message = '';
    this.type = 'success';
  }
  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(state => {
      if (state.type) {
        this.type = state.type;
      } else {
        this.type = 'success';
      }
      this.message = state.message;
      this.show = state.show;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    });
  }
  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }
  static #_ = this.ctorParameters = () => [{
    type: _snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService
  }];
};
SnackbarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-snackbar',
  template: _snackbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_snackbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SnackbarComponent);


/***/ }),

/***/ 5652:
/*!*****************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SnackbarService = class SnackbarService {
  constructor() {
    this.snackbarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.snackbarState = this.snackbarSubject.asObservable();
  }
  show(message, type) {
    this.snackbarSubject.next({
      show: true,
      message,
      type
    });
  }
  static #_ = this.ctorParameters = () => [];
};
SnackbarService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], SnackbarService);


/***/ }),

/***/ 2642:
/*!****************************************************************!*\
  !*** ./src/app/shared/tabs/tab-header/tab-header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabHeaderComponent: () => (/* binding */ TabHeaderComponent)
/* harmony export */ });
/* harmony import */ var _tab_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-header.component.html?ngResource */ 3895);
/* harmony import */ var _tab_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-header.component.css?ngResource */ 2145);
/* harmony import */ var _tab_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabHeaderComponent = class TabHeaderComponent {
  constructor(cd) {
    this.cd = cd;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isOverflowed = false;
    this.scrollPosition = 0;
  }
  onResize(event) {
    this.checkOverflow();
  }
  ngAfterViewInit() {
    this.checkOverflow();
  }
  selectTab(tab) {
    this.select.emit(tab);
  }
  closeTab(tab) {
    this.close.emit(tab);
  }
  trackbyTitle(index, item) {
    return item.title;
  }
  checkOverflow() {
    const container = this.itemListContainer.nativeElement;
    const list = this.itemList.nativeElement;
    this.isOverflowed = list.scrollWidth > container.clientWidth && list.scrollWidth !== this.scrollPosition + container.clientWidth;
    this.cd.detectChanges();
  }
  scrollNext() {
    const container = this.itemListContainer.nativeElement;
    const list = this.itemList.nativeElement;
    this.scrollPosition += container.clientWidth;
    if (this.scrollPosition > list.scrollWidth - container.clientWidth) {
      this.scrollPosition = list.scrollWidth - container.clientWidth;
    }
    this.checkOverflow();
    list.style.transform = `translateX(-${this.scrollPosition}px)`;
  }
  scrollPrev() {
    this.scrollPosition -= this.itemListContainer.nativeElement.clientWidth;
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
    this.checkOverflow();
    this.itemList.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    itemListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['itemListContainer']
    }],
    itemList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['itemList']
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['window:resize', ['$event']]
    }]
  };
};
TabHeaderComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-header',
  template: _tab_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  host: {
    "[style.display]": "'flex'"
  },
  styles: [(_tab_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabHeaderComponent);


/***/ }),

/***/ 7842:
/*!**************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 9788);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 1206);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabComponent = class TabComponent {
  constructor(cdRef) {
    this.cdRef = cdRef;
    this.closeTabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this._active = false;
  }
  get active() {
    return this._active;
  }
  set active(value) {
    this._active = value;
    this.cdRef.detectChanges();
  }
  close() {
    this.closeTabEvent.emit();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tabTitle']
    }],
    closeTabEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 7070:
/*!****************************************************!*\
  !*** ./src/app/shared/tabs/tabs/tabs.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 46);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 6033);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ 7842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4614);
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab-header/tab-header.component */ 2642);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let TabsComponent = class TabsComponent {
  constructor(cdRef) {
    this.cdRef = cdRef;
    this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
  }
  ngAfterContentInit() {
    let activeTabs = this.tabs.filter(tab => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0 && this.tabs.length !== 0) {
      this.selectTab(this.tabs.first);
    }
    this._tabsSubscription = this.tabs.changes.subscribe(() => {
      if (this.tabs.length !== 0) {
        this.selectTab(this.tabs.last);
        this.header.checkOverflow();
      }
    });
  }
  selectTab(tab) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => {
      tab.active = false;
    });
    // activate the tab the user has clicked on.
    tab.active = true;
    this.cdRef.detectChanges();
  }
  ngOnDestroy() {
    if (this._tabsSubscription) {
      this._tabsSubscription.unsubscribe();
      this._tabsSubscription = null;
    }
  }
  closeTab(tab) {
    tab.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
      args: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_3__.TabHeaderComponent]
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }]
  };
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 5131:
/*!******************************************************!*\
  !*** ./src/app/store/locations/locations.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLocation: () => (/* binding */ addLocation),
/* harmony export */   addLocationFailure: () => (/* binding */ addLocationFailure),
/* harmony export */   addLocationSuccess: () => (/* binding */ addLocationSuccess),
/* harmony export */   removeLocation: () => (/* binding */ removeLocation),
/* harmony export */   removeLocationSuccess: () => (/* binding */ removeLocationSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const removeLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('remove Location', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('Add Location', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addLocationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('Add Location Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addLocationFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('Add Location Failure');
const removeLocationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('remove Location Success');

/***/ }),

/***/ 3183:
/*!******************************************************!*\
  !*** ./src/app/store/locations/locations.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationsEffects: () => (/* binding */ LocationsEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/weather.service */ 4323);
/* harmony import */ var _locations_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.actions */ 5131);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/location.service */ 4107);
/* harmony import */ var _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/snackbar/snackbar.service */ 5652);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LocationsEffects = class LocationsEffects {
  constructor(actions$, weatherService, locationService, snackbarService) {
    this.actions$ = actions$;
    this.weatherService = weatherService;
    this.locationService = locationService;
    this.snackbarService = snackbarService;
    this.addLocation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_locations_actions__WEBPACK_IMPORTED_MODULE_1__.addLocation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(value => this.weatherService.getCurrentConditions(value.zipcode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => {
      this.locationService.addLocation(value.zip);
      return _locations_actions__WEBPACK_IMPORTED_MODULE_1__.addLocationSuccess({
        location: value
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err, caught) => {
      this.snackbarService.show("Please enter a valid 5-digit ZIP code or make sure the ZIP code field is not empty.", "error");
      return caught;
    })));
    this.removeLocation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_locations_actions__WEBPACK_IMPORTED_MODULE_1__.removeLocation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(value => {
      this.locationService.removeLocation(value.zipcode);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => _locations_actions__WEBPACK_IMPORTED_MODULE_1__.removeLocationSuccess())));
  }
  static #_ = this.ctorParameters = () => [{
    type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions
  }, {
    type: _core_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService
  }, {
    type: _core_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService
  }, {
    type: _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService
  }];
};
LocationsEffects = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()], LocationsEffects);


/***/ }),

/***/ 3969:
/*!******************************************************!*\
  !*** ./src/app/store/locations/locations.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   locationReducer: () => (/* binding */ locationReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _locations_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.actions */ 5131);


const initialState = {
  locations: []
};
const locationReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_locations_actions__WEBPACK_IMPORTED_MODULE_0__.addLocation, (state, props) => {
  return {
    ...state
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_locations_actions__WEBPACK_IMPORTED_MODULE_0__.addLocationSuccess, (state, props) => {
  return {
    ...state,
    locations: [...state.locations.filter(location => location.zip !== props.location.zip), props.location]
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_locations_actions__WEBPACK_IMPORTED_MODULE_0__.addLocationFailure, (state, props) => {
  return {
    ...state
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_locations_actions__WEBPACK_IMPORTED_MODULE_0__.removeLocation, (state, props) => {
  return {
    ...state,
    locations: [...state.locations.filter(location => location.zip !== props.zipcode)]
  };
}));

/***/ }),

/***/ 604:
/*!*******************************************************!*\
  !*** ./src/app/store/locations/locations.selector.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locationsSelector: () => (/* binding */ locationsSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _locations_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.states */ 4033);


const selectRoot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_locations_states__WEBPACK_IMPORTED_MODULE_0__.LOCATION_FEATURE_KEY);
const locationsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectRoot, state => state.locations);

/***/ }),

/***/ 4033:
/*!*****************************************************!*\
  !*** ./src/app/store/locations/locations.states.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATION_FEATURE_KEY: () => (/* binding */ LOCATION_FEATURE_KEY)
/* harmony export */ });
const LOCATION_FEATURE_KEY = "locations";

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3859:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/cache-configuration/cache-configuration.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.arrow-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #f00;
}

.options{
    display: flex;
    gap: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/features/cache-configuration/cache-configuration.component.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,mCAAmC;IACnC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,SAAS;AACb","sourcesContent":[".arrow-down {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid #f00;\r\n}\r\n\r\n.options{\r\n    display: flex;\r\n    gap: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6498:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.css?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
  box-shadow: none;
  border: none;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,YAAY;AACd","sourcesContent":[".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4204:
/*!*********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9386:
/*!*******************************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.snackbar-wrap {
    position: fixed;
    bottom: 50px;
    left: 50%;
    padding: 20px 0px;
    border-radius: 5px;
    min-width: 20%;
    transform-origin: center center;
    transform: translate(-50%, 0%);
}
.snackbar-wrap.success {
        background: rgb(0, 173, 72);
    }
.snackbar-wrap.error {
        background: rgb(173, 35, 0);
    }
.snackbar-wrap .snackbar-text {
        text-align: center;
        font-size: 1.3em;
        color: white;
        margin: 0;
    }

`, "",{"version":3,"sources":["webpack://./src/app/shared/snackbar/snackbar.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,+BAA+B;IAC/B,8BAA8B;AAClC;AACA;QACQ,2BAA2B;IAC/B;AACJ;QACQ,2BAA2B;IAC/B;AACJ;QACQ,kBAAkB;QAClB,gBAAgB;QAChB,YAAY;QACZ,SAAS;IACb","sourcesContent":[".snackbar-wrap {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    left: 50%;\r\n    padding: 20px 0px;\r\n    border-radius: 5px;\r\n    min-width: 20%;\r\n    transform-origin: center center;\r\n    transform: translate(-50%, 0%);\r\n}\r\n.snackbar-wrap.success {\r\n        background: rgb(0, 173, 72);\r\n    }\r\n.snackbar-wrap.error {\r\n        background: rgb(173, 35, 0);\r\n    }\r\n.snackbar-wrap .snackbar-text {\r\n        text-align: center;\r\n        font-size: 1.3em;\r\n        color: white;\r\n        margin: 0;\r\n    }\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2145:
/*!****************************************************************************!*\
  !*** ./src/app/shared/tabs/tab-header/tab-header.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-close {
    color: rgb(128, 128, 128);
    text-align: right;
    cursor: pointer;
}
.nav-tabs{
    border-bottom:none;
}

a{
    text-decoration: none;
}
.tab-container{
    margin: 0;
    padding: 0;
    max-height: 35px;
    max-width: 100%;
    overflow: hidden;
    position: relative;
}
ul.tabs{
    margin: 0;
    list-style-type : none;
    line-height : 35px;
    max-height: 35px;
    padding-right: 20px
}

ul.tabs > li.active{
    z-index: 2;
    background: #f5f5f5;
}

ul.tabs > li{
    float : right;
    margin : 5px -10px 0;
    border-top-right-radius: 25px 170px;
    border-top-left-radius: 20px 90px;
    padding : 0 30px 0 25px;
    height: 170px;
    background: #ddd;
    position : relative;
}

.tab-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

}

ul.tabs > li:before{
    border-color : transparent #ddd transparent transparent;
    -webkit-transform : rotate(48deg);
    left: -23px;
}

ul.tabs > li:after{
    border-color : transparent transparent transparent #ddd;
    -webkit-transform : rotate(-48deg);
    right: -17px;
}
.tabs {
    display: flex;
    white-space: nowrap;
    transition: transform 0.3s;
}

.tab {
    white-space: nowrap;
    margin-right: 10px;
}


`, "",{"version":3,"sources":["webpack://./src/app/shared/tabs/tab-header/tab-header.component.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB;AACJ;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,mCAAmC;IACnC,iCAAiC;IACjC,uBAAuB;IACvB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;;AAEZ;;AAEA;IACI,uDAAuD;IACvD,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,uDAAuD;IACvD,kCAAkC;IAClC,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":[".tab-close {\r\n    color: rgb(128, 128, 128);\r\n    text-align: right;\r\n    cursor: pointer;\r\n}\r\n.nav-tabs{\r\n    border-bottom:none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n.tab-container{\r\n    margin: 0;\r\n    padding: 0;\r\n    max-height: 35px;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\nul.tabs{\r\n    margin: 0;\r\n    list-style-type : none;\r\n    line-height : 35px;\r\n    max-height: 35px;\r\n    padding-right: 20px\r\n}\r\n\r\nul.tabs > li.active{\r\n    z-index: 2;\r\n    background: #f5f5f5;\r\n}\r\n\r\nul.tabs > li{\r\n    float : right;\r\n    margin : 5px -10px 0;\r\n    border-top-right-radius: 25px 170px;\r\n    border-top-left-radius: 20px 90px;\r\n    padding : 0 30px 0 25px;\r\n    height: 170px;\r\n    background: #ddd;\r\n    position : relative;\r\n}\r\n\r\n.tab-header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n\r\n}\r\n\r\nul.tabs > li:before{\r\n    border-color : transparent #ddd transparent transparent;\r\n    -webkit-transform : rotate(48deg);\r\n    left: -23px;\r\n}\r\n\r\nul.tabs > li:after{\r\n    border-color : transparent transparent transparent #ddd;\r\n    -webkit-transform : rotate(-48deg);\r\n    right: -17px;\r\n}\r\n.tabs {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.tab {\r\n    white-space: nowrap;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1206:
/*!**************************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6033:
/*!****************************************************************!*\
  !*** ./src/app/shared/tabs/tabs/tabs.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n<app-snackbar></app-snackbar>\r\n";

/***/ }),

/***/ 8455:
/*!********************************************************************************************!*\
  !*** ./src/app/features/cache-configuration/cache-configuration.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n    <h2>Cache configuration</h2>\r\n    <div class=\"options\">\r\n        <span> time to live (seconds):</span>\r\n        <input type=\"number\" [value]=\"timetoLiveValue\" #ttl appNumbersOnly min=\"0\"\r\n               (change)=\"setTimeToLive(ttl.value)\">\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 9009:
/*!******************************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tabs *ngIf=\"currentConditionsByZip()\">\r\n    <app-tab *ngFor=\"let location of currentConditionsByZip(); let first = first\"\r\n             tabTitle=\"{{location.data.name}} ({{location.zip}})\"\r\n             (closeTabEvent)=\"removeLocation(location.zip)\">\r\n        <div>\r\n            <div class=\"well flex\">\r\n                <div>\r\n                    <h4>Current conditions: {{location.data.weather[0].main}}</h4>\r\n                    <h4>Temperatures today:</h4>\r\n                    <p>\r\n                        Current {{location.data.main.temp | number:'.0-0'}}\r\n                        - Max {{location.data.main.temp_max | number:'.0-0'}}\r\n                        - Min {{location.data.main.temp_min | number:'.0-0'}}\r\n                    </p>\r\n                    <p>\r\n                        <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{location.data.name}}</a>\r\n                    </p>\r\n                </div>\r\n                <div>\r\n                    <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </app-tab>\r\n</app-tabs>\r\n";

/***/ }),

/***/ 8269:
/*!**********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"forecast$ | async as forecast\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n\r\n    </div>\r\n    <ul class=\"list-group\" >\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n\r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n";

/***/ }),

/***/ 920:
/*!************************************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n  <app-cache-configuration></app-cache-configuration>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 2969:
/*!********************************************************************************!*\
  !*** ./src/app/features/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\" required>\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ }),

/***/ 2174:
/*!********************************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"show\"\r\n     [ngClass]=\"['snackbar-wrap',type]\">\r\n    <p class=\"snackbar-text\">\r\n        {{message}}\r\n    </p>\r\n</div>\r\n";

/***/ }),

/***/ 3895:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/tabs/tab-header/tab-header.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button class=\"btn btn-primary\" *ngIf=\"scrollPosition > 0\" (click)=\"scrollPrev()\"> < </button>\r\n<div  class=\"tab-container\" #itemListContainer>\r\n    <ul class=\"nav nav-tabs tabs clearfix\"  #itemList>\r\n        <li *ngFor=\"let tab of tabs; trackBy:trackbyTitle\" [ngClass]=\"{'tab':true,'active':tab.active}\">\r\n            <div class=\"tab-header\">\r\n                <a (click)=\"selectTab(tab)\" href=\"#\">{{tab.title}}</a>\r\n                <button (click)=\"closeTab(tab)\" class=\"close\">&times;</button>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<button class=\"btn btn-primary\" *ngIf=\"isOverflowed\" (click)=\"scrollNext()\"> > </button>\r\n";

/***/ }),

/***/ 9788:
/*!***************************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [hidden]=\"!active\" class=\"pane\">\r\n    <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 46:
/*!*****************************************************************!*\
  !*** ./src/app/shared/tabs/tabs/tabs.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tab-header [tabs]=\"tabs\" (close)=\"closeTab($event)\" (select)=\"selectTab($event)\"></app-tab-header>\r\n<ng-content></ng-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map