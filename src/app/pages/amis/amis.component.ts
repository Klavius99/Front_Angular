import { Component } from '@angular/core';
import { NavbarComponent } from "../../composants/navbar/navbar.component";

@Component({
  selector: 'app-amis',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './amis.component.html',
  styleUrl: './amis.component.css'
})
export class AmisComponent {

}
