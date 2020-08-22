import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AppComponent } from '../app.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { UserDataServiceService } from '../Service/user-data-service.service';
import { User } from '../Model/user';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let user = new User();
  user.id = 1;
  class UserDataServiceTest {
    getUserById(id: any) {
      return of(user)
    }
  }
  class RouterTest {
    navigate(path: any) { }
  }

  class AuthServiceTest {
    currentUserValue() {

      return user;
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
      declarations: [
        AppComponent, UsersComponent, UserdetailComponent, LoginComponent
      ],

      providers: [
        { provide: Router, useClass: RouterTest },
        { provide: AuthService, useClass: AuthServiceTest },
        { provide: UserDataServiceService, useClass: UserDataServiceTest },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
