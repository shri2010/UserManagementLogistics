import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './Service/auth-guard.service';

const routes: Routes = [
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
    { path: 'userDetails/:id', component: UserdetailComponent, canActivate: [AuthGuardService] },
    { path: 'userDetails', component: UserdetailComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
