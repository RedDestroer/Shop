import { Injectable } from '@angular/core';
import { Product } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  public addProduct(product: Product){
    this.products.push(product);
  }
}
