import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/product/all')
  }
  getAllProductsByCat(category:string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/product/category/${category}`)
  }
}
