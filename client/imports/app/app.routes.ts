import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './content/add/add.component';
import { SendComponent } from "./content/send/send.component";
import { SpendComponent } from "./content/spend/spend.component";
import { RedeemMenuComponent } from "./content/spend/pair_menu/redeem.component";
import { CreateCouponComponent } from "./content/spend/create_coupons/create_coupon_menu.component";

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
        { path: 'spend/store/:pairId',  component: RedeemMenuComponent },
        { path: 'spend/create/:pairId', component: CreateCouponComponent }
    ]},
];