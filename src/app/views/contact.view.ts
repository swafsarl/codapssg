import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  template: `
    <h1>Contact us</h1>
    <p>Lorem ipsum</p>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class PageContact {}
