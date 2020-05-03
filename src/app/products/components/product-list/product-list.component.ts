import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
