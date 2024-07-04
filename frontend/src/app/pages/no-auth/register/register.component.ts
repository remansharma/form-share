import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoAuthService } from '../services/no-auth/no-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {





  constructor(
    private noAuthService: NoAuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {  }


  registerForm = new FormGroup<{
    name: FormControl<string | null>,
    phone: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>
  }>({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  registerAdmin() {
    if(this.registerForm.invalid){
      this.snackBar.open('Please fill all the fields.', 'Close', {
        duration: 2000,
      });
      return;
    }

    let name = this.registerForm.get('name')?.value || '';
    let phone = this.registerForm.get('phone')?.value || '';
    let email = this.registerForm.get('email')?.value || '';
    let password = this.registerForm.get('password')?.value || '';

    console.log(name, phone, email, password);

    this.noAuthService.registerAdmin(name, email, password).subscribe((res:any) => {
      
      let message = res.message || `Successfully registed ${email}`;
      this.snackBar.open(message, 'Close', {
        duration: 2000
      })

      this.registerForm.reset();

    }, (error: any) => {

      console.log(error.error.message);

      let message = error.error.message || 'Network Issue. Please Contact Admin.';

      this.snackBar.open(message, 'Close', {
        duration: 2000,
      });
      
      return;
    });
    
  }

  openLoginPage() {
    this.router.navigate(['/no-auth/login']) ;
  }


}
