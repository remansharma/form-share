// src/app/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/auth/dashboard/dashboard.component';
import { CreateFormComponent } from '../pages/auth/create-form/create-form.component';
import { ListOfFormsComponent } from '../pages/auth/list-of-forms/list-of-forms.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-form', component: CreateFormComponent },
  { path: 'list-of-forms', component: ListOfFormsComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
