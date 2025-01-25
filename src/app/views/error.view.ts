import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
    <h1>404</h1>
    <p>Not found</p>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class Page404 {}
