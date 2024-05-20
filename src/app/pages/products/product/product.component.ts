import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../api/model/product';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CartService } from '../../../api/services/cart.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule,
    MatCardModule, 
    MatIconModule,
    MatChipsModule, 
    SlicePipe, 
    CurrencyPipe
],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required:true}) product!: Product;
  constructor(private ruter:Router, private cartService: CartService){}
  viewItem(){
          this.ruter.navigate(['products',this.product.id])
  }

  addToCart(){
    this.cartService.addItem({
      id:this.product.id,
      title: this.product.title,
      image:this.product.image,
      price: this.product.price,
      quantity:1
    })

  }

  

}
