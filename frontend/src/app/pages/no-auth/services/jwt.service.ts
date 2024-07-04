import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }







  async setAuthToken(jwtToken: string) {
    localStorage.setItem('admin_auth', jwtToken);
  }

}
