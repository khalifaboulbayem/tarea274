import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}
  isLoginPage() {
    return this.router.url === '/login' || this.router.url === '/registrar';
  }
  title = 'tarea274_angular';
}
