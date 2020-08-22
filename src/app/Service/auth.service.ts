import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currernUserSubject: BehaviorSubject<User>;

    public currentUser: Observable<User>;

    constructor() {
        this.currernUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currernUserSubject.asObservable();
    }

    //Get current user
    currentUserValue(): User {
        return this.currernUserSubject.value;
    }

    //check whether current user is admin
    get IsAdmin(): boolean {
        return this.currernUserSubject.value.isadmin;
    }

    //set current user
    setUser(user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currernUserSubject.next(user);
    }

    //clear current user from local storage
    clearUser() {
        localStorage.removeItem('currentUser');
        this.currernUserSubject.next(null);
    }
}
