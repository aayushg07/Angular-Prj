import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <app-navigation />
    <main class="container mx-auto p-4">
      <router-outlet />
    </main>
  `,
  styles: []
})
export class AppComponent {}