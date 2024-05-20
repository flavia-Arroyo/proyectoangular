import { Component } from '@angular/core';
import { ProductsService } from '../../api/services/products.service';

import { Product } from '../../api/model/product';
import { ProductComponent } from './product/product.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-pages-products',
  standalone: true,
  imports: [ProductComponent, MatButtonToggleModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories: string[]=[];
  products: Product[]=[]
  constructor(private productService:ProductsService){
    
    this.productService.getAllCategories().subscribe({
      next:data=>{
        this.categories=data;
      },
      error:err=>{
        console.error(err)
      }
    });
  }
  onCategoryChange(value:string){
    if(value){
      this.productService.getAllByCategory(value).subscribe({
        next:data=>{
          this.products = data;
        },
        error:err=>{
          console.error(err)
        }
      })

    }else{
      this.productService.getAll().subscribe({
        next:data=>{
          this.products = data;
        },
        error:err=>{
          console.error(err)
        }
      });

    }
   

  }

}
