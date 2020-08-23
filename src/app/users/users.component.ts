import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { AuthService } from '../Service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    public displayedColumns: string[] = ['id', 'name', 'username', 'age', 'city', 'action'];

    constructor(
        private userDataService: UserDataServiceService,
        private authService: AuthService,
        private _snackBar: MatSnackBar,
    ) {}

    public isAdmin: boolean;

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }

    ngOnInit(): void {
        this.isAdmin = this.authService.IsAdmin;
        if (this.isAdmin) {
            this.userDataService.getUsers().subscribe((users) => {
                this.users = users;
                this.openSnackBar('Data Fetched Succesfully', 'Get');
            });
        } else {
            this.userDataService.getUserById(this.authService.currentUserValue().id.toString()).subscribe((user) => {
                debugger;
                this.users = [];
                this.users.push(user);
                console.log(user);
            });
            this.openSnackBar('Data Fetched Succesfully', 'Get');
        }
    }

    Delete(id: string): void {
        this.userDataService.deleteUsers(id).subscribe((users) => {
            this.ngOnInit();
            this.openSnackBar('Data Fetched Succesfully', 'Get');
        });
    }
}
