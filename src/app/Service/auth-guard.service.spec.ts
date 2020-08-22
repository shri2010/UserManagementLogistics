import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';

describe('AuthGuardService', () => {
    let service: AuthGuardService;
    let authService: AuthService;
    let router: Router;
    class RouterTest {
        navigate(path: any) {}
    }

    class AuthServiceTest {
        currentUserValue() {
            return new User();
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: Router, useClass: RouterTest },
                { provide: AuthService, useClass: AuthServiceTest },
            ],
        });

        router = TestBed.inject(Router);
        authService = TestBed.inject(AuthService);
    });

    test('should be created', () => {
        service = new AuthGuardService(authService, router);
        expect(service).toBeTruthy();
    });

    test('should be created', () => {
        service = new AuthGuardService(authService, router);
        expect(service.canActivate()).toBeTruthy();
    });
});
