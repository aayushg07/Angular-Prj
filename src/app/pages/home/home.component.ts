import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="home-container">
      <h1>Welcome to My Angular App</h1>
      <p>
        This is a demo application built with Angular 18. Explore the API data page or submit a form.
      </p>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}