import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/no-auth/login/login.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';


import { RegisterComponent } from './pages/no-auth/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateFormComponent } from './pages/auth/create-form/create-form.component';
import { ListOfFormsComponent } from './pages/auth/list-of-forms/list-of-forms.component';
import { TokenInterceptor } from './@core/interceptors/token.service';
import { ShareFormComponent } from './pages/auth/share-form/share-form.component';
import { EditFormComponent } from './pages/auth/dialogues/edit-form/edit-form.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CreateFormComponent,
    ListOfFormsComponent,
    ShareFormComponent,
    EditFormComponent,
  ],
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
