import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';

import { Article, FetchingService } from '../services/fetching.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-detail',
  template: `<div class="my-3 p-3 bg-body rounded shadow-sm">
    <a [routerLink]="['/blogs']">&lt; Back to list page</a>
    @if (article$ | async; as post) {
    <h1 class="mt-2">{{ post.title }}</h1>
    <div class="d-flex text-muted pt-3  border-bottom">
      <img
        class="bd-placeholder-img flex-shrink-0 me-2 rounded"
        width="32"
        height="32"
        aria-label="Placeholder: 32x32"
        [src]="post.avatarImgUrl"
      />
      <p class="pb-3 mb-0 small lh-sm">
        <strong class="d-block text-gray-dark">{{
          '@' + post.createdBy
        }}</strong>
        - {{ post.createdAt | date : 'ddd M, yyy' }}
      </p>
    </div>
    <div class="mt-4" [innerHTML]="post.content"></div>
    } @else {
    <div class="text-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    }
  </div>`,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BlogDetailPage implements OnInit {
  article$!: Observable<Article>;

  private fetchSvc = inject(FetchingService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.article$ = this.fetchSvc.getBlogDetail(id);
  }
}
