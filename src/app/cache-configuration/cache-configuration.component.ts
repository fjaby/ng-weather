import { Component } from '@angular/core';
import {CacheService} from "../core/services/cache.service";
import {disableDebugTools} from "@angular/platform-browser";

@Component({
  selector: 'app-cache-configuration',
  templateUrl: './cache-configuration.component.html',
  styleUrls: ['./cache-configuration.component.css']
})
export class CacheConfigurationComponent {

  displayed: boolean = false;

  constructor(protected cacheService: CacheService) {
  }


  protected readonly Number = Number;
}
