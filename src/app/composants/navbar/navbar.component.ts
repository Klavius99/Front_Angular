import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent,NgClass,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string = "Emilie Gomis";
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
