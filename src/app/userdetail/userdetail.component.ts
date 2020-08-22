import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { User } from '../Model/user';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
    selector: 'app-userdetail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
    public userDetailForm: FormGroup;
    public user: User;
    public isAdmin: boolean;
    public isEdit: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserDataServiceService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
    ) {
        this.userDetailForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            username: [null, Validators.required],
            age: [null, [Validators.required]],
            city: [null, [Validators.required]],
            isadmin: false,
        });
    }

    ngOnInit(): void {
        var id = this.route.snapshot.paramMap.get('id');
        if (id !== undefined && id !== null) {
            this.userService.getUserById(id).subscribe((user: User) => {
                this.userDetailForm.setValue({
                    name: user.name,
                    username: user.username,
                    age: user.age,
                    city: user.city,
                    isadmin: user.isadmin,
                });
                this.userDetailForm.controls['username'].disable();
                this.isEdit = false;
            });
        }

        this.isAdmin = this.authService.IsAdmin;
    }

    onSubmit(value: User) {
        if (this.isEdit) {
            this.userService.updateUser(value).subscribe((x) => {
                this.router.navigate(['/users']);
            });
        } else {
            this.userService.createUsers(value).subscribe((x) => {
                this.router.navigate(['/users']);
            });
        }
    }
}
