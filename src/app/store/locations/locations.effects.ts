import {Injectable} from "@angular/core";
import {WeatherService} from "../../core/services/weather.service";
import * as fromActions from "./locations.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, map, tap} from "rxjs/operators";
import {ConditionsAndZip} from "../conditions-and-zip.type";
import {LocationService} from "../../core/services/location.service";

@Injectable()
export class LocationsEffects {

    addLocation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.addLocation),
            concatMap(value => this.weatherService.getCurrentConditions(value.zipcode)),
            map((value: ConditionsAndZip) => {
                this.locationService.addLocation(value.zip);
                return fromActions.addLocationSuccess({location: value});
            })
        )
    );
    removeLocation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.removeLocation),
            tap(value => {
                this.locationService.removeLocation(value.zipcode)
            }),
            map(value => fromActions.removeLocationSuccess())
        )
    );

    constructor(private actions$: Actions, private weatherService: WeatherService, private locationService: LocationService) {
    }

}
