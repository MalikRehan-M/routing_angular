import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  private isAuthenticated = false;
  constructor(private router: Router) {}
  login() {
    // Implement your login logic here.
    // For simplicity, we'll set isAuthenticated to true.
    this.isAuthenticated = true;
  }

  logout() {
    // Implement your logout logic here.
    // For simplicity, we'll set isAuthenticated to false.
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isAuthenticatedUser()) {
      return true; // Allow access if the user is authenticated.
    } else {
      // Redirect to a login page or show an unauthorized message.
      // For now, we'll redirect to the home page.
      this.router.navigate(['/home']);
      return false;
    }
  }
}
