import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <h1>Feedback Form</h1>
      
      <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            formControlName="name" 
            [class.invalid]="feedbackForm.get('name')?.invalid && feedbackForm.get('name')?.touched">
          
          <div *ngIf="feedbackForm.get('name')?.invalid && feedbackForm.get('name')?.touched" class="error-message">
            Name is required
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            formControlName="email" 
            [class.invalid]="feedbackForm.get('email')?.invalid && feedbackForm.get('email')?.touched">
          
          <div *ngIf="feedbackForm.get('email')?.invalid && feedbackForm.get('email')?.touched" class="error-message">
            Valid email is required
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            formControlName="message" 
            rows="4"
            [class.invalid]="feedbackForm.get('message')?.invalid && feedbackForm.get('message')?.touched"></textarea>
          
          <div *ngIf="feedbackForm.get('message')?.invalid && feedbackForm.get('message')?.touched" class="error-message">
            Message is required (min 10 characters)
          </div>
        </div>
        
        <button 
          type="submit" 
          [disabled]="feedbackForm.invalid">
          Submit
        </button>
      </form>
      
      <div *ngIf="submitted" class="success-message">
        Thank you for your feedback!
      </div>
    </div>
  `,
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  submitted = false;
  private fb = inject(FormBuilder);
  
  feedbackForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      submissions.push({
        ...this.feedbackForm.value,
        date: new Date().toISOString()
      });
      localStorage.setItem('formSubmissions', JSON.stringify(submissions));

      this.submitted = true;
      this.feedbackForm.reset();
      setTimeout(() => this.submitted = false, 3000);
    }
  }
}