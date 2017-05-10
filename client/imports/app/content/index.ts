import { ContentComponent } from './content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { SendComponent } from './send/send.component';
import { SpendComponent } from "./spend/spend.component";
import { RedeemMenuComponent } from "./spend/pair_menu/redeem.component";
import { CreateCouponComponent } from "./spend/create_coupons/create_coupon_menu.component";

export const CONTENT_DECLARATIONS = [
    ContentComponent,
    NavbarComponent,
    AddComponent,
    SendComponent,
    SpendComponent,
    RedeemMenuComponent,
    CreateCouponComponent
];