import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private http: HttpClient
  ) { }






  createForm(adminID: string, name: string, forms: any) {
    const body = {
      adminID: adminID,
      name: name,
      forms: forms
    };

    return this.http.post(`${environment.baseURL}/forms/create`, body);
  }

  getForms() {
    return this.http.post(`${environment.baseURL}/forms/get-list-of-forms`, {});
  }

  getForm(id: string) {
    const body = {
      id: id
    };
    return this.http.post(`${environment.baseURL}/forms/get-form`, body);
  }

  deleteForm(id: string) {

    const body = {
      id: id
    }

    return this.http.post(`${environment.baseURL}/forms/delete`, body);
  }

  updateForm(id: string, updatedName: string) {
    const body = {
      id: id,
      updatedName: updatedName
    }

    return this.http.post(`${environment.baseURL}/forms/update`, body);
  }

}
