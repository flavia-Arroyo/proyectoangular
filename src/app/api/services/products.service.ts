import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http=inject(HttpClient);
  constructor() { }
  getAll(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
