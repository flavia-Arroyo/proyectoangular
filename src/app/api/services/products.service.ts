import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http=inject(HttpClient);
  constructor() { }
  private BASEURL ='https://fakestoreapi.com/products'
  getAll(){
    return this.http.get<Product[]>(`${this.BASEURL}`);
  }
  getById(id:number){
    return this.http.get<Product>(`${this.BASEURL}/${id}`)
  }
  getAllCategories(){
    return this.http.get<string[]>( `${this.BASEURL}/categories`)
  }
  getAllByCategory(category:string){
    return this.http.get<Product[]>( `${this.BASEURL}/category/${category}`)
  }


}
