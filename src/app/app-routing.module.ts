import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ListComponent } from './list/list.component'; 
import { MyComponentComponent } from './my-component/my-component.component';
import { TestComponent } from './test/test.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MyGuard } from  './MyGuard'
import {ProductListComponent} from './product-list/product-list.component'
import {ProductDetailsComponent} from './product-details/product-details.component'
import {CartComponent} from './cart/cart.component'
import {ShippingComponent} from './shipping/shipping.component'




const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },             
  { path: 'list', component: ListComponent }  , 
  { path: 'my-component', pathMatch: 'full',component: MyComponentComponent }  ,
  { path: 'test/:id',pathMatch: 'prefix', canActivate:[MyGuard],   component: TestComponent }  ,  
  {path: 'contacts' , component: ContactListComponent},
  
  {path: 'contact/:id' , component: ContactDetailComponent},

  {path: 'products' , component: ProductListComponent},
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
