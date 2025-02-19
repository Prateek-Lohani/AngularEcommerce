import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'seller',
        component: SellerAuthComponent
    },
    {
        path:'login',
        component:LoginComponent

    },{
        path:'cart',
        component:CartComponent
    },{
        path:'seller-home',
        canActivate:[authGuard],
        component: SellerHomeComponent
    },
    {
        path:'**',
        pathMatch:'full',
        component:NotFoundComponent
    }
];
