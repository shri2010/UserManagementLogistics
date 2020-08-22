import { Component, OnInit } from '@angular/core';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';
import { User } from './Model/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public user: User = null;
    public isLoggedIn: boolean = false;
    title = 'UserManagementLogistics';
    constructor(private authService: AuthService, private router: Router) {
        this.authService.currentUser.subscribe((user) => {
            this.user = user;
            this.setIsLoggedIn();
        });
    }

    ngOnInit(): void {
        debugger;
        this.user = this.authService.currentUserValue();
        this.setIsLoggedIn();
    }

    private setIsLoggedIn() {
        if (this.user == null) {
            this.isLoggedIn = false;
        } else {
            this.isLoggedIn = true;
        }
    }

    logout(): void {
        this.authService.clearUser();
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }
}
