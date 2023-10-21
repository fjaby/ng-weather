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
            this.locations.push(zipcode);
        }
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        this.store.dispatch(addLocation({zipcode}))
    }

    removeLocation(zipcode: string) {
        let index = this.locations.indexOf(zipcode);
        if (index !== -1) {
            this.locations.splice(index, 1);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
            this.store.dispatch(removeLocation({zipcode}))
        }
    }
}
