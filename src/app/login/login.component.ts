import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { User } from '../Model/user';
import { AuthService } from '../Service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private userDataService: UserDataServiceService,
        private authService: AuthService,
    ) {}
    username: string;
    password: string;
    ngOnInit() {}
    login(): void {
        this.userDataService.getUsers().subscribe((users: User[]) => {
            var index = users.findIndex((usr) => this.username == usr.username);
            if (index >= 0) {
                this.authService.setUser(users[index]);
                this.router.navigate(['/users']);
            } else {
                alert('Invalid credentials');
            }
        });
    }

    isValid(): boolean {
        if (
            this.username !== undefined &&
            this.username.trim() !== '' &&
            this.password !== undefined &&
            this.password.trim() !== ''
        ) {
            return false;
        }
        return true;
    }
}
