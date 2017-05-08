import { Route } from '@angular/router';

//import { GroupComponent } from './groups/group-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './content/add/add.component';
import { SendComponent } from "./content/send/send.component";
import { SpendComponent } from "./content/spend/spend.component";
import { PairMenuComponent } from "./content/spend/pair_menu/pair_menu.component";

export const routes: Route[] = [
    // { path: '**', redirectTo: 'login/', pathMatch: 'full'},
    { path: '',         redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',    component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'content',  component: ContentComponent,
    children: [
        { path: 'add',                  component: AddComponent },
        { path: 'send',                 component: SendComponent },
        { path: 'spend',                component: SpendComponent },
        { path: 'spend/store/:pairId',  component: PairMenuComponent }
    ]},
];