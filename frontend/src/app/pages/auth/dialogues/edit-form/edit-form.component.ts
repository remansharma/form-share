import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { FormsService } from '../../services/forms.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent {

  formName: string = 'default name';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formsService: FormsService,
    private matSnackBar: MatSnackBar) { }

    ngOnInit() {
      this.formName = this.data['name'];
    }

  update() {
    
    this.formsService.updateForm(this.data['_id'], this.formName).subscribe((res: any) => {
      this.matSnackBar.open(res.message, 'open', {
        duration: 2000
      })
    });


  }

}


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
