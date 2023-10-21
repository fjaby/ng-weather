import {Injectable, signal} from '@angular/core';
import {HttpResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    timeToLive = signal<number>(720000)

    constructor() {
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
        const expirationTime: number = new Date().getTime() + this.timeToLive();
        const cachedData: { data, expiresAt, timetoLive } = {data: response, expiresAt: expirationTime, timetoLive: this.timeToLive()};
        localStorage.setItem(url, JSON.stringify(cachedData));

    }

    // Remove data from local storage
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
