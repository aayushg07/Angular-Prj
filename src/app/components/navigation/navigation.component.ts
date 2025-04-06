// navigation.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="nav-container">
      <ul class="nav-list">
        <li class="nav-item">
          <a routerLink="/" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/api-data" 
             routerLinkActive="active" 
             class="nav-link">
            API Data
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/form" 
             routerLinkActive="active" 
             class="nav-link">
            Form
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/submissions" 
             routerLinkActive="active" 
             class="nav-link">
            Submissions
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {}