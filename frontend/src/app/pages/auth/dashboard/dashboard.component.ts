import { Component } from '@angular/core';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  createDynamicForm() {
    console.log('Dynamic form creation');
  }
}
