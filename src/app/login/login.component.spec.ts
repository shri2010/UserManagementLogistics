import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from '../users/users.component';
import { AppComponent } from '../app.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    class UserDataServiceTest {}
    class RouterTest {
        navigate(path: any) {}
    }

    class AuthServiceTest {
        currentUserValue() {
            return new User();
        }
    }
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MatToolbarModule,
                MatIconModule,
                HttpClientModule,
                MatTableModule,
                CdkTableModule,
                MatGridListModule,
                MatButtonModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatDialogModule,
                MatProgressSpinnerModule,
                FormsModule,
                MatSlideToggleModule,
            ],
            declarations: [AppComponent, UsersComponent, UserdetailComponent, LoginComponent],

            providers: [
                { provide: Router, useClass: RouterTest },
                { provide: AuthService, useClass: AuthServiceTest },
                { provide: UserDataServiceService, useClass: UserDataServiceTest },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should create', () => {
        expect(component).toBeTruthy();
    });
});
