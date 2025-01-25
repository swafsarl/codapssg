import { Routes } from '@angular/router';
import { Page404 } from './views/error.view';
import { BlogListingPage } from './views/blogs-list.view';
import { BlogDetailPage } from './views/blog-detail.view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blogs',
  },
  {
    path: 'blogs',
    component: BlogListingPage,
  },
  {
    path: 'blogs/:id',
    component: BlogDetailPage,
  },
  {
    path: '**',
    component: Page404,
  },
];
