import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  { 
    path: 'api-data', 
    loadComponent: () => import('./pages/api-data/api-data.component').then(m => m.ApiDataComponent),
    title: 'API Data'
  },
  { 
    path: 'form', 
    loadComponent: () => import('./pages/form/form.component').then(m => m.FormComponent),
    title: 'Form'
  },
  { 
    path: 'submissions', 
    loadComponent: () => import('./pages/submissions/submissions.component').then(m => m.SubmissionsComponent),
    title: 'Submissions'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];