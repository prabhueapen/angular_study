import { Component, OnInit } from '@angular/core';
import {products} from "../products" ;
import {CartService} from "../cart.service" ;
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }
    addToCart(product) {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(product);
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
