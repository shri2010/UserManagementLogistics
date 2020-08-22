import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '../Model/user';

describe('AuthService', () => {
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    test('should be created', () => {
        expect(service).toBeTruthy();
    });

    test('currentUserValue', () => {
        let user = new User();
        user.isadmin = false;
        spy = spyOn(service, 'currentUserValue').and.returnValue(user);
        expect(service.currentUserValue()).toEqual(user);
    });
});
