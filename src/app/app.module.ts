import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import {RouterModule, Routes} from "@angular/router";
import { NavComponent } from './helper/nav/nav.component';
import {DataServiceService} from "./services/data-service.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HttpModule} from "@angular/http";
import { ProfileComponent } from './pages/profile/profile.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth/registration', component: RegistrationComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'products/categories/:id', component: ProductCategoryComponent },
  { path: 'products/cart', component: CartComponent },
  { path: 'products/checkout', component: CheckoutComponent },
  { path: 'products/checkout/thank-you', component: ThankYouComponent },

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ShopComponent,
    ProductCategoryComponent,
    ProductViewComponent,
    CartComponent,
    CheckoutComponent,
    ThankYouComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
