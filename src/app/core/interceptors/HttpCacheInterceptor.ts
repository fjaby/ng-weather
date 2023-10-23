import {
    HttpContextToken,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {CacheService} from "../services/cache.service";

export const CACHE_ACTIVATED: HttpContextToken<boolean> = new HttpContextToken(() => false);

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
    cacheServices = inject(CacheService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const activated: boolean = req.context.get(CACHE_ACTIVATED);
        if (!activated) {
            return next.handle(req);
        }

        const cacheResponse: HttpResponse<any> = this.cacheServices.request(req.url);
        // Object.assign(cacheResponse, this.cacheServices.request(req.url));

        if (cacheResponse) {
            return of(cacheResponse);
        }
        return next.handle(req).pipe(
            tap((response: HttpEvent<any>) => {
                if (response instanceof HttpResponse) {
                    this.cacheServices.cache(req.url, response)
                }
            })
        );
    }

}
