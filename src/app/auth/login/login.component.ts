import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule pour ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterLink], // Ajoutez FormsModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  showPassword = false;
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.message = 'Connexion réussie !';
        this.messageType = 'success';
        // Redirigez vers le tableau de bord ou une autre page
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.message = 'Erreur lors de la connexion : ' + (error.error.message || 'Erreur inconnue');
        this.messageType = 'error';
      }
    });
  }
}