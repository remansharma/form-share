import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }




  authToken: string = "";

  isLoggedIn() {
    if(!this.authToken) {
      this.authToken = localStorage.getItem('authToken') || "";
    }
    return !!this.authToken;
  }

}
