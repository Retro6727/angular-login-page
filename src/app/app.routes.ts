import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegistrationComponent},
    { path: 'accounts', component: AccountsComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
