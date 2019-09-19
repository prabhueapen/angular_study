import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor( private cartService: CartService) { }

  ngOnInit() {
    window.alert("asd") ;

   let d =     this.cartService.getShippingPrices(); 
   console.log(d) ;
    this.shippingCosts = d;
  }

}
