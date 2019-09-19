import { Component, OnInit } from '@angular/core';
import { products } from '../products';
  @Component({
    selector: 'app-contact-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
  })
 
 export class ProductListComponent  { 
    products = products;
    constructor( ) { }
    share() {

        window.alert("Share porduct");
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
      }
 }