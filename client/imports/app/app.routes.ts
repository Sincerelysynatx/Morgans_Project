import { Route } from '@angular/router';

//import { GroupComponent } from './groups/group-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

export const routes: Route[] = [
    // { path: '**', redirectTo: 'login/', pathMatch: 'full'},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
    // { path: 'content/', component: }
];