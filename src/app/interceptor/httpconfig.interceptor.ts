import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../Service/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.currentUserValue() != null) {
            request = request.clone({
                headers: request.headers.set('logged-in', this.authService.currentUserValue().username.toString()),
            });
        }
        return next.handle(request);
    }
}
