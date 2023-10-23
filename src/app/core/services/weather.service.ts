import {Injectable, Signal, signal} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpContext} from '@angular/common/http';
import {CurrentConditions} from '../../features/current-conditions/current-conditions.type';
import {ConditionsAndZip} from '../../store/conditions-and-zip.type';
import {Forecast} from '../../features/forecasts-list/forecast.type';
import {error} from "protractor";
import {CACHE_ACTIVATED} from "../interceptors/HttpCacheInterceptor";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(private http: HttpClient) { }

  getCurrentConditions(zipcode: string): Observable<ConditionsAndZip>{
    let context = new HttpContext();
    context.set(CACHE_ACTIVATED, true);
    return this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=metric&APPID=${WeatherService.APPID}`,{context})
        .pipe(
            map(data =>({zip: zipcode, data}))
        );
  }

  getForecast(zipcode: string): Observable<Forecast> {
    let context = new HttpContext();
    context.set(CACHE_ACTIVATED, true);
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=metric&cnt=5&APPID=${WeatherService.APPID}`,{context});

  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }

}
