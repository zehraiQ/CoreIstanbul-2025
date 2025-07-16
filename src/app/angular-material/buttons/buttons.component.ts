import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) { }
  openDialog(){
    this.dialog.open(DialogsComponent,{width: '600px',data: {title: 'Core Istanbul'}})
    .afterClosed().subscribe(result => {
      this.snackbar.open('You clicked ' + (result === 'true' ? 'Ok' : 'Cancel'), 'Close', {duration: 2000});
      
    });
    }
}
