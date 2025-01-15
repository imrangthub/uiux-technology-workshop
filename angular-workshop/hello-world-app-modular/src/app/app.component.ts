import { Component } from '@angular/core';

@Component({
  standalone: false,  // <-- This is what makes the component standalone
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-seven-todo-prod';
}