import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="container">
      <h1>API Data</h1>
      
      <div *ngIf="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading data...</p>
      </div>
      
      <div *ngIf="error" class="error-state">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
        <span>{{ error }}</span>
      </div>
      
      <div *ngIf="data" class="data-grid">
        <div *ngFor="let item of data" class="data-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  data: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response.slice(0, 7); // Get first 5 items
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}