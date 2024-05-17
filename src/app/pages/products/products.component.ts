import { Component } from '@angular/core';
import { ProductsService } from '../../api/services/products.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../api/model/product';

@Component({
  selector: 'app-pages-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[]=[]
  constructor(private productService:ProductsService){
    this.productService.getAll().subscribe({
      next:data=>{
        this.products = data;
      },
      error:err=>{
        console.log(err)
      }
    });
  }

}
