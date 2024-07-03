import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private formsService: FormsService, private matSnackBar: MatSnackBar) {
    this.form = this.fb.group({
      formName: '', 
      fields: this.fb.array([])
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  addField() {
    const fieldFormGroup = this.fb.group({
      label: `Label for field ${this.fields.length + 1}`,
      type: 'text',
      value: '',
      options: this.fb.array([])
    });
    this.fields.push(fieldFormGroup);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  createForm() {
    const formsModified = this.fields.controls.map(field => ({
      label: field.get('label')?.value,
      type: field.get('type')?.value,
      value: field.get('value')?.value,
      options: field.get('options')?.value || []
    }));

    const formNameValue = this.form.get('formName')?.value;

    if (!formNameValue) {
      this.matSnackBar.open("Please enter the form name", "open", { duration: 2000 });
      return;
    }

    if (formsModified.length === 0) {
      this.matSnackBar.open("Please enter form inputs", "open", { duration: 2000 });
      return;
    } else {
      let inputValueEmpty = formsModified.some(form => form.value === "");
      if (inputValueEmpty) {
        this.matSnackBar.open("Please enter the input value", "open", { duration: 2000 });
        return;
      }
    }

    this.formsService.createForm("66537b87d0425310097f954d", formNameValue, formsModified).subscribe(() => {
      this.matSnackBar.open("Successfully created new form", "open", { duration: 2000 });
      this.form.setControl('fields', this.fb.array([]));
      this.form.reset();
    });
  }
}
