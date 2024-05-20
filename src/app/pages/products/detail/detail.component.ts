import { Component ,  Input, OnInit} from '@angular/core';
import { ProductsService } from '../../../api/services/products.service';
import { Product } from '../../../api/model/product';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../../api/services/cart.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatChipsModule,MatIconModule,MatButtonModule,CurrencyPipe, MatProgressSpinnerModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  @Input( )id:number=0;
 product?:Product;
  constructor(private productService:ProductsService,
    private cartService: CartService
  ){
    

  }

  ngOnInit(): void {
    this.productService.getById(this.id).subscribe({

      next:data=>{ 
        this.product=data;
      },
      error: err=>{
        console.error(err)
      },

    });
    
      
  }

  addToCart(){
    this.cartService.addItem({
      id:this.product!.id,
      title: this.product!.title,
      image:this.product!.image,
      price: this.product!.price,
      quantity:1
    })
       
  }

}
