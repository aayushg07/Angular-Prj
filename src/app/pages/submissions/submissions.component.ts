import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="submissions-container">
      <h1>All Submissions</h1>

      <a routerLink="/form" class="back-button"> Go Back </a>

      <div *ngIf="submissions.length === 0" class="empty-state">
        <div class="empty-content">
          <h3>No submissions yet</h3>
          <p>Be the first to share your thoughts!</p>
          <a routerLink="/form" class="cta-button"> Create Submission </a>
        </div>
      </div>

      <div
        *ngFor="let sub of submissions; let i = index"
        class="submission-card"
      >
        <div class="submission-header">
          <h3>{{ sub.name }}</h3>
          <span class="submission-date">{{ sub.date | date : 'medium' }}</span>
        </div>
        <p class="submission-email"><strong>Email:</strong> {{ sub.email }}</p>
        <p class="submission-message">{{ sub.message }}</p>
        <div class="submission-actions">
          <button class="delete-btn" (click)="deleteSubmission(i)">
            Delete Submission
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  submissions: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Delay loading until after render
    if (isPlatformBrowser(this.platformId)) {
      this.loadSubmissions();
    }
  }
  private loadSubmissions(): void {
    const storedData = localStorage.getItem('formSubmissions');
    this.submissions = storedData ? JSON.parse(storedData) : [];
    this.sortSubmissions();
  }

  private sortSubmissions(): void {
    this.submissions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  deleteSubmission(index: number): void {
    if (confirm('Are you sure you want to delete this submission?')) {
      this.submissions.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('formSubmissions', JSON.stringify(this.submissions));
  }
}
