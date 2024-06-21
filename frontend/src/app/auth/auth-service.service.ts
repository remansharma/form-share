// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Mock method to check if the user is authenticated
  isAuthenticated(): boolean {
    // Implement your logic here to check if the user is authenticated
    // For example, check if a token exists in localStorage
    // return !!localStorage.getItem('authToken');
    return true;
  }

  // Mock method to login (this should be replaced with actual logic)
  login(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Mock method to logout
  logout(): void {
    localStorage.removeItem('authToken');
  }

}
