import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  message: string | null = null;
  messageType: 'success' | 'error' | null = null; // Ajout d'un type de message

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.message = 'Inscription réussie !';
          this.messageType = 'success'; // Définir le type de message
          this.registerForm.reset();
          this.router.navigate(['/login']); // Rediriger vers la page de connexion
          this.autoHideMessage(); // Appeler la fonction pour masquer le message
        },
        error: (error) => {
          this.message = 'Erreur lors de l\'inscription : ' + error.error.message;
          this.messageType = 'error'; // Définir le type de message
          this.autoHideMessage(); // Appeler la fonction pour masquer le message
        }
      });
    }
  }

  autoHideMessage() {
    setTimeout(() => {
      this.message = null; // Masquer le message après 3 secondes
      this.messageType = null; // Réinitialiser le type de message
    }, 3000);
  }
}