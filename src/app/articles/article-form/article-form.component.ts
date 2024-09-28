import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article } from '../../models/article.model';
import { NavbarComponent } from "../../composants/navbar/navbar.component";



@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})

export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;
  isEditMode = false;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      isPublic: false,
      allowComments: false
    });
  }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    
    if (articleId) {
      this.isEditMode = true;
      this.loadArticle(articleId);
    }
  }

  loadArticle(id: string) {
    this.articleService.getArticle(+id).subscribe((data) => {
      this.articleForm.patchValue({
        title: data.title,
        content: data.content,
        isPublic: data.isPublic,
        allowComments: data.allowComments
      });
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.articleService.updateArticle({
        id: +this.route.snapshot.paramMap.get('id')!,
        ...this.articleForm.value
      }).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    } else {
      this.articleService.createArticle(this.articleForm.value).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }
}