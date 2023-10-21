import {LocationState} from "./locations.states";
import {Action, createReducer, on} from "@ngrx/store";
import {addLocation, addLocationFailure, addLocationSuccess, removeLocation} from "./locations.actions";

export const initialState: LocationState = {locations: []}

export const locationReducer = createReducer<LocationState, Action>(initialState,
        on(addLocation, (state, props) => {
            return {...state}
        }),
        on(addLocationSuccess, (state, props) => {
            return {
                ...state,
                locations: [
                    ...state.locations.filter(location => location.zip !== props.location.zip)
                    , props.location
                ]
            }
        }),
        on(addLocationFailure, (state, props) => {
            return {...state}
        }),
        on(removeLocation, (state, props) => {
            return {
                ...state,
                locations: [...state.locations.filter(location => location.zip !== props.zipcode)]
            }
        })
    )
;