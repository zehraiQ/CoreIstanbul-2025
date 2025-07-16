import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  standalone: false,
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss'
})
export class DialogsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  closeDialog(){
    this.dialog.closeAll();
  }
  // You can add methods here to handle dialog actions or data
}
