import { Component } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$: Observable<Product[]> = this.productService.getAllProducts();

  constructor(private productService: ProductsService) {}

  chageCategory(category: string) {
    this.products$ = this.productService.getAllProductsByCat(category);
  }

}
