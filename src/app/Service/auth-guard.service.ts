import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}

    async canActivate() {
        const currentUser = this.authService.currentUserValue();
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
