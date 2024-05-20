import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from '../../../api/services/cart.service';
import { CartComponent } from '../../../pages/cart/cart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule, RouterLink],
  templateUrl: './car-button.component.html',
  styleUrl: './car-button.component.css'
})
export class CarButtonComponent {
 
  constructor(private cartService:CartService){
    
  }

  get count(){
    return this.cartService.getCount();

  }


}
