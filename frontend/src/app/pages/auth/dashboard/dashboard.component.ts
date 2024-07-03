import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {



  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('admin_auth');
    this.router.navigate(['/no-auth/login']);
  }

  openCreateFormPage() {
    this.router.navigate(['/auth/create-form']);
  }

  openListOfFormPage() {
    this.router.navigate(['/auth/list-of-forms']);
  }
}
