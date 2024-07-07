import { Component, Inject } from '@angular/core';
import { FormsService } from '../services/forms.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EditFormComponent } from '../dialogues/edit-form/edit-form.component';

@Component({
  selector: 'app-list-of-forms',
  templateUrl: './list-of-forms.component.html',
  styleUrls: ['./list-of-forms.component.scss']
})

export class ListOfFormsComponent {
  forms: any[] = [];

  listOfForms = ELEMENT_DATA;

  // Function to convert ISO date string to readable format using Moment.js
  convertToReadableFormat(dateString: string) {
    // Check if moment is defined
    if (typeof moment === 'undefined') {
      throw new Error('Moment.js is not loaded');
    }

    // Parse the ISO date string
    var momentDate = moment(dateString);

    // Format the date in a readable format, e.g., "MMMM Do YYYY, h:mm:ss a"
    var readableFormat = momentDate.format('MMMM Do YYYY, h:mm:ss a');

    return readableFormat;
  }

  constructor(private formsService: FormsService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) { }

  getListOfForms() {
    this.formsService.getForms().subscribe((data: any) => {
      this.forms = data;

      this.listOfForms = this.forms.map((form, index) => {
        return {
          _id: form._id,
          position: index + 1,
          name: form.name,
          createdOn: this.convertToReadableFormat(form.createdOn)
        }
      })
    });
  }

  ngOnInit(): void {
    this.getListOfForms();
  }

  displayedColumns: string[] = ['position', 'name', 'createdOn', 'actions'];

  editForm(element: any): void {
    this.dialog.open(EditFormComponent, {
      width: '550px',
      data: element
    });
  }

  onEdit(element: any) {
    this.editForm(element);
  }

  onDelete(element: any) {
    this.formsService.deleteForm(element['_id']).subscribe((res: any) => {
      this.matSnackBar.open(res.message, 'close', {
        duration: 2000
      });
      this.getListOfForms();
    });
  }
  
  openSharePage(element: any) {
    this.router.navigate(['/no-auth/share'], { queryParams: { id: element._id } });
  }

  openDashboard() {
    this.router.navigate(['/auth/dashboard']);
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [];

