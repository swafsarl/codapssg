import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FetchingService } from '../services/fetching.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'blogs-listing',
  template: `
    <div class="my-3 p-3 bg-body rounded shadow-sm">
      <h6 class="border-bottom pb-2 mb-0">Blog list</h6>
      @for (post of articles$ | async; track $index) {
      <div class="d-flex text-muted pt-3" [id]="$index">
        <img
          class="bd-placeholder-img flex-shrink-0 me-2 rounded"
          width="32"
          height="32"
          aria-label="Placeholder: 32x32"
          [src]="post.avatarImgUrl"
        />
        <p class="pb-3 mb-0 small lh-sm border-bottom">
          <strong class="d-block text-gray-dark">{{
            '@' + post.createdBy
          }}</strong>
          <a [routerLink]="['/blogs', post.id]">{{ post.title }}</a>
        </p>
      </div>
      }
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BlogListingPage {
  fetchSvc = inject(FetchingService);
  articles$ = this.fetchSvc.getBlogList();
}
