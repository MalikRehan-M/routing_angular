import { Component } from '@angular/core';
import { AuthGuard } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthGuard) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
