import { Component } from '@angular/core';
import { NavbarComponent } from "../../composants/navbar/navbar.component";

@Component({
  selector: 'app-mes-articles',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './mes-articles.component.html',
  styleUrl: './mes-articles.component.css'
})
export class MesArticlesComponent {

}
