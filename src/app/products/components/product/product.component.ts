import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart';
import { Product } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log('Product bought!');

    this.cartService.addProduct(new Product('Product3'));
  }
}
