import {Injectable, signal} from '@angular/core';

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

    // get the data associated to the key.
    request(key: string): any {
        const cachedData: string = localStorage.getItem(key);
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            if (parsedData.expiresAt >= new Date().getTime()) {
                return parsedData.data;
            } else {
                this.remove(key);
            }
        }
        return null;
    }

    // Save data on local storage with a key.
    cache(key: string, data: any): void {
        const expirationTime: number = new Date().getTime() + this._timeToLive();
        const cachedData: { data, expiresAt, timeToLive } = {
            data: data,
            expiresAt: expirationTime,
            timeToLive: this._timeToLive()
        };
        localStorage.setItem(key, JSON.stringify(cachedData));

    }

    // Remove data from local storage
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
