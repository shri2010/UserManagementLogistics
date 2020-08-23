import { TestBed } from '@angular/core/testing';
import { UserDataServiceService } from './user-data-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

describe('UserDataServiceService', () => {
    let service: UserDataServiceService;
    let spy: any;
    let httpClientObj: HttpClient;
    let user: User;

    beforeEach(() => {
        let httpClientTest = { get: jest.fn(), post: jest.fn(), delete: jest.fn(), patch: jest.fn() };
        TestBed.configureTestingModule({ providers: [{ provide: HttpClient, useValue: httpClientTest }] });
    });

    test('should be created', () => {
        httpClientObj = TestBed.inject(HttpClient);
        service = new UserDataServiceService(httpClientObj);
        expect(service).toBeTruthy();
    });

    test('get', () => {
        httpClientObj = TestBed.inject(HttpClient);
        service = new UserDataServiceService(httpClientObj);
        expect(service).toBeTruthy();
        spy = spyOn(httpClientObj, 'get').and.returnValue(user);
        expect(service.getUsers()).toEqual(user);
    });
});
