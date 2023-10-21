import {ConditionsAndZip} from "../conditions-and-zip.type";

export const LOCATION_FEATURE_KEY = "locations";

export interface State{
    readonly [LOCATION_FEATURE_KEY]: LocationState;
}

export interface LocationState{
    locations: ReadonlyArray<ConditionsAndZip>
}