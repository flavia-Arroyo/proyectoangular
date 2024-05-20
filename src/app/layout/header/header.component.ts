import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarButtonComponent } from './car-button/car-button.component';


@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,CarButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name="My E-Shop"

}
