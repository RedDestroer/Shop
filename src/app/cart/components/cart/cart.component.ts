import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products';
import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<Product>;

  constructor(public cartService: CartService) {
    this.products = new Array<Product>();
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }
}
