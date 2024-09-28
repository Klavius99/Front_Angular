import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { AmisComponent } from './pages/amis/amis.component';
import { MesArticlesComponent } from './pages/mes-articles/mes-articles.component';
  
  export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    {
      path: 'articles',
      children: [
          { path: '', component: ArticleListComponent }, // Liste des articles
          { path: 'add', component: ArticleFormComponent }, // Formulaire pour créer un nouvel article
          { path: ':id', component: ArticleDetailComponent } // Détails d'un article par ID
      ]
  },
  { path: 'Amis', component: AmisComponent },
  { path: 'Mes-Articles', component: MesArticlesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
  ];

  imports: [
    // ... autres imports
    ReactiveFormsModule,
    HttpClientModule,
  ]


  
  
  