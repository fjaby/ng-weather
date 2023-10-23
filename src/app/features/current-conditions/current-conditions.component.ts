import {ChangeDetectionStrategy, Component, inject, OnInit, Signal} from '@angular/core';
import {WeatherService} from "../../core/services/weather.service";
import {LocationService} from "../../core/services/location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../../store/conditions-and-zip.type';
import {Store} from "@ngrx/store";
import {locationsSelector} from "../../store/locations/locations.selector";
import {removeLocation} from "../../store/locations/locations.actions";
@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent implements OnInit{

  protected weatherService = inject(WeatherService);
  private router = inject(Router);
  private store = inject(Store);
  private locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ReadonlyArray<ConditionsAndZip>> = this.store.selectSignal(locationsSelector);

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  removeLocation(zipcode: string){
    this.store.dispatch(removeLocation({zipcode}));
  }

  ngOnInit(): void {
    this.locationService.loadLocation();
  }
}
