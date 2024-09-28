// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Le service est fourni au niveau de l'application
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Remplacez par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) {}

  //Inscription
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  //Connexion
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Vous pouvez ajouter d'autres méthodes comme login, logout, etc.
}