import {Injectable, signal} from '@angular/core';
import {HttpResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    private _timeToLive = signal<number>(720000)

    constructor() {
    }

    get timeToLiveValue() {
        return this._timeToLive();
    }

    set timeToLiveValue(newVal: number) {
        this._timeToLive.set(newVal);
    }

    request(url: string): HttpResponse<any> {
        const cachedData: string = localStorage.getItem(url);
        const response: HttpResponse<any> = new HttpResponse();
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            if (parsedData.expiresAt >= new Date().getTime()) {
                Object.assign(response, parsedData.data)
                return response;
            } else {
                this.remove(url);
            }
        }
        return null;
    }

    cache(url: string, response: HttpResponse<any>): void {
        const expirationTime: number = new Date().getTime() + this._timeToLive();
        const cachedData: { data, expiresAt, timetoLive } = {
            data: response,
            expiresAt: expirationTime,
            timetoLive: this._timeToLive()
        };
        localStorage.setItem(url, JSON.stringify(cachedData));

    }

    // Remove data from local storage
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
