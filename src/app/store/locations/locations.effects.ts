import {Injectable} from "@angular/core";
import {WeatherService} from "../../core/services/weather.service";
import * as fromActions from "./locations.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {debounceTime, exhaustMap, map, switchMap} from "rxjs/operators";
import {ConditionsAndZip} from "../../conditions-and-zip.type";
@Injectable()
export class LocationsEffects {

    constructor(private actions$: Actions,private weatherService: WeatherService) {
    }

    addLocation$ = createEffect(()=>
        this.actions$.pipe(
            ofType(fromActions.addLocation),
            exhaustMap(value => this.weatherService.getCurrentConditions(value.zipcode) ),
            map((value:ConditionsAndZip) =>  fromActions.addLocationSuccess({location: value}))
        )
    )

}