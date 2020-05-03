import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product>;

  constructor() {
    const product1 = new Product('Product1');
    const product2 = new Product('Product2');

    this.products = new Array<Product>();
    this.products.push(product1);
    this.products.push(product2);
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
