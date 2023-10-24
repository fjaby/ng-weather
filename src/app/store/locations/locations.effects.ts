import {Injectable} from "@angular/core";
import {WeatherService} from "../../core/services/weather.service";
import * as fromActions from "./locations.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, map, tap} from "rxjs/operators";
import {ConditionsAndZip} from "../conditions-and-zip.type";
import {LocationService} from "../../core/services/location.service";
import {SnackbarService} from "../../shared/snackbar/snackbar.service";
import {of} from "rxjs";

@Injectable()
export class LocationsEffects {

    addLocation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.addLocation),
            concatMap(value => this.weatherService.getCurrentConditions(value.zipcode)),
            map((value: ConditionsAndZip) => {
                this.locationService.addLocation(value.zip);
                return fromActions.addLocationSuccess({location: value});
            }),
            catchError((err, caught) => {
                this.snackbarService.show("Please enter a valid 5-digit ZIP code or make sure the ZIP code field is not empty.","error")
                return of({
                    type: fromActions.addLocationFailure().type,
                    payload:{err}
                })
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

    constructor(private actions$: Actions, private weatherService: WeatherService, private locationService: LocationService, private snackbarService: SnackbarService) {
    }

}
