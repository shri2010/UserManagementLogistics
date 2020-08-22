import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { AuthService } from '../Service/auth.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    public displayedColumns: string[] = ['id', 'name', 'username', 'age', 'city', 'action'];

    constructor(private userDataService: UserDataServiceService, private authService: AuthService) {}

    public isAdmin: boolean;

    ngOnInit(): void {
        this.isAdmin = this.authService.IsAdmin;
        if (this.isAdmin) {
            this.userDataService.getUsers().subscribe((users) => (this.users = users));
        } else {
            this.userDataService.getUserById(this.authService.currentUserValue().id.toString()).subscribe((user) => {
                debugger;
                this.users = [];
                this.users.push(user);
                console.log(user);
            });
        }
    }

    Delete(id): void {
        this.userDataService.deleteUsers(id).subscribe((users) => this.ngOnInit());
    }
}
