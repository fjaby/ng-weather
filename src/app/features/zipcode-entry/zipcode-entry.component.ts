import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import { addLocation } from 'app/store/locations/locations.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(private store : Store) { }

  addLocation(zipcode : string){
    this.store.dispatch(addLocation({zipcode}))
  }

}
