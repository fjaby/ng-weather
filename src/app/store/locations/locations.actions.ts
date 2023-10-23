import {createAction, createActionGroup, props} from "@ngrx/store";
import {ConditionsAndZip} from "../conditions-and-zip.type";
import {HttpErrorResponse} from "@angular/common/http";

export const removeLocation = createAction('remove Location',props<{zipcode: string}>());
export const addLocation = createAction('Add Location',props<{zipcode: string}>());
export const addLocationSuccess = createAction(
    'Add Location Success',
    props<{ location: ConditionsAndZip }>()
)
export const addLocationFailure = createAction(
    'Add Location Failure',
    props<{ error: HttpErrorResponse | Error }>()
)

export const removeLocationSuccess = createAction('remove Location Success');
