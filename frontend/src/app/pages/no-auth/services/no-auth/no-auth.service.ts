import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    return throwError(errorMessage);
  }


  registerAdmin(name: string, email: string, password: string) {

    const body = {
      name: name,
      email: email,
      password: password
    };

    return this.http.post(`${environment.baseURL}/auth/admin/signup`, body);
  }

  loginAdmin(email: string, password: string) {

    const body = {
      username: email,
      password: password
    };

    return this.http.post(`${environment.baseURL}/auth/admin/login`, body).pipe(
      catchError(this.handleError)
    );
  }

}
