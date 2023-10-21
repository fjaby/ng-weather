import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CacheService} from "../../core/services/cache.service";

@Component({
    selector: 'app-cache-configuration',
    templateUrl: './cache-configuration.component.html',
    styleUrls: ['./cache-configuration.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CacheConfigurationComponent {

    private cacheService = inject(CacheService)
    timetoLiveValue: number = this.cacheService.timeToLiveValue/1000;

    setTimeToLive(value: string) {
        let val = Number(value);
        if(val !==  Number.NaN) {
            this.cacheService.timeToLiveValue = val *1000;
        }
    }
}
