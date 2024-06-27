import { Component } from '@angular/core';

// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  openLoginPage() {
    this.router.navigate(['/no-auth/login']);
  }

  openRegisterPage() {
    this.router.navigate(['/no-auth/register']);
  }

}
