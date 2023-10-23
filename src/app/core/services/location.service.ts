import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {addLocation} from "../../store/locations/locations.actions";

export const LOCATIONS: string = "locations";

@Injectable({
    providedIn:'root'
})
export class LocationService {

    locations: string[] = []

    constructor(private store: Store) {
    }

    loadLocation(){
        let locString = localStorage.getItem(LOCATIONS);
        if (locString) {
            this.locations = JSON.parse(locString);
            for (let loc of this.locations) {
                this.store.dispatch(addLocation({zipcode: loc}))
            }
        }
        localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    }

    addLocation(zipcode: string) {
        if (!this.locations.includes(zipcode)) {
            this.locations.push(zipcode);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        }
    }

    removeLocation(zipcode: string) {
        let index = this.locations.indexOf(zipcode);
        if (index !== -1) {
            this.locations.splice(index, 1);
            localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
        }
    }

}
