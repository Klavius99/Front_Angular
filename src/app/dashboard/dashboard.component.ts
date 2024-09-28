import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../composants/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Simulate a brief loading animation, for example 500 ms
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Adjust the time for how long you want the loader to be visible
  }
}
