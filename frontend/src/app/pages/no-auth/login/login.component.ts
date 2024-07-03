import { Component } from '@angular/core';
import { NoAuthService } from '../services/no-auth/no-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})


export class LoginComponent {

  loginForm = new FormGroup<{
    email: FormControl<string | null>,
    password: FormControl<string | null>
  }>({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(
    private noAuthService: NoAuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private jwtService: JwtService
  ) {}


  redirectToDashboard() {
    this.router.navigate(['auth/dashboard']);
  }

  ngOnInit() {
    this.redirectToDashboard();
  }

  loginAdmin() {
    if(this.loginForm.invalid){
      this.snackBar.open('Please fill all the fields', 'Close', {
        duration: 2000,
      });
      return;
    }

    let email = this.loginForm.get('email')?.value || '';
    let password = this.loginForm.get('password')?.value || '';

    this.noAuthService.loginAdmin(email, password).subscribe((res:any) => {
      this.jwtService.setAuthToken(res.token);

      if(res.token) {
        this.router.navigate(['/auth/dashboard']);
      } else {
        this.snackBar.open('Successfully logged in', 'open', {
          duration: 2000
        })
      }
      
      
     }, (error: any) => {
      this.snackBar.open('Network Issue. Please Contact Admin.', 'Close', {
        duration: 2000,
      });
      return;

    });
     

  }

  openRegisterPage() {
    this.router.navigate(['/no-auth/register']);
  }


}
