import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoAuthService } from '../services/no-auth/no-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {





  constructor(
    private noAuthService: NoAuthService,
    private snackBar: MatSnackBar
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
      console.log(res);
    }, (error: any) => {
      this.snackBar.open('Network Issue. Please Contact Admin.', 'Close', {
        duration: 2000,
      });
      
      return;
    });
    
  }


}
