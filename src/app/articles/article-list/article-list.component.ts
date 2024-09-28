import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  imports: [CommonModule],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/articles', id]); // Redirige vers la page de détails de l'article
  }
}