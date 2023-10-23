import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {addLocation, removeLocation} from "../../store/locations/locations.actions";

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

    locations: string[] = [];

    constructor(private store: Store) {
        let locString = localStorage.getItem(LOCATIONS);
        if (locString)
            this.locations = JSON.parse(locString);
        for (let loc of this.locations) {
            this.store.dispatch(addLocation({zipcode: loc}))
        }
    }

    addLocation(zipcode: string) {
        if (!this.locations.includes(zipcode)) {
           this.locations = [zipcode, ...this.locations];
        }
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        this.store.dispatch(addLocation({zipcode}))
    }

}
