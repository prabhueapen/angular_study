import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import {TestComponent} from './test/test.component';
import {MyGuard} from './MyGuard';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { BackendService } from "./backend.service";
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    MyComponentComponent,
    TestComponent,
    ContactListComponent,
    ContactDetailComponent ,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule ,HttpClientModule 
    ,InMemoryWebApiModule.forRoot(BackendService)
    
  ],
  providers: [MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
