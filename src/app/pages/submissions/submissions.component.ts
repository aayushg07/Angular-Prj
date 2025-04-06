import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="submissions-container">
      <h1>All Submissions</h1>

      <a routerLink="/form" class="back-button"> Go Back </a>

      <div *ngIf="submissions.length === 0" class="empty-state">
        No submissions yet. Be the first to submit!
      </div>

      <div *ngFor="let sub of submissions" class="submission-card">
        <div class="submission-header">
          <h3>{{ sub.name }}</h3>
          <span class="submission-date">{{ sub.date | date : 'medium' }}</span>
        </div>
        <p class="submission-email"><strong>Email:</strong> {{ sub.email }}</p>
        <p class="submission-message">{{ sub.message }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  submissions: any[] = [];

  constructor() {
    this.loadSubmissions();
  }

  private loadSubmissions(): void {
    const storedData = localStorage.getItem('formSubmissions');
    this.submissions = storedData ? JSON.parse(storedData) : [];

    // Sort by date (newest first)
    this.submissions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
