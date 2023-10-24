import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LOCATION_FEATURE_KEY, LocationState} from "./locations.states";

const selectRoot = createFeatureSelector<LocationState>(LOCATION_FEATURE_KEY);

export const locationsSelector = createSelector(selectRoot, (state: LocationState) => state.locations)
