import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
    providedIn: 'root',
})
export class UserDataServiceService {
    private url: string = 'api/users';

    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.url);
    }

    createUsers(user: User): Observable<User> {
        return this.httpClient.post<User>(this.url, user);
    }

    updateUser(user: User): Observable<User> {
        return this.httpClient.patch<User>(this.url, User);
    }

    deleteUsers(id: string): Observable<User> {
        return this.httpClient.delete<User>(this.url + '/' + id);
    }

    getUserById(id: string): Observable<User> {
        return this.httpClient.get<User>(this.url + '/' + id);
    }
}
