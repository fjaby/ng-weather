import {Injectable} from "@angular/core";
import {WeatherService} from "../../core/services/weather.service";
import * as fromActions from "./locations.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {debounceTime, exhaustMap, map, switchMap, tap} from "rxjs/operators";
import {ConditionsAndZip} from "../conditions-and-zip.type";
import {LocationService} from "../../core/services/location.service";
@Injectable()
export class LocationsEffects {

    constructor(private actions$: Actions,private weatherService: WeatherService,private locationService:LocationService) {
    }

    addLocation$ = createEffect(()=>
        this.actions$.pipe(
            ofType(fromActions.addLocation),
            switchMap(value => this.weatherService.getCurrentConditions(value.zipcode) ),
            tap()
            map((value:ConditionsAndZip) =>  fromActions.addLocationSuccess({location: value}))
        )
    )

}