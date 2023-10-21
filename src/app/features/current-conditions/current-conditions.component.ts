import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../../core/services/weather.service";
import {LocationService} from "../../core/services/location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../../conditions-and-zip.type';
import {Store} from "@ngrx/store";
import {locationsSelector} from "../../store/locations/locations.selector";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent {

  protected weatherService = inject(WeatherService);
  private router = inject(Router);
  private store = inject(Store)
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ReadonlyArray<ConditionsAndZip>> = this.store.selectSignal(locationsSelector);

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
