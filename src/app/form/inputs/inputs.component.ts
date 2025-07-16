import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inputs',
  standalone: false,
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  constructor(
    private snackBar: MatSnackBar
  ) { }
  minDate = new Date();
  cars = [
    {id: 1, name: 'Ford'},
    {id: 2, name: 'Chevrolet'}, 
    {id: 3, name: 'Toyota'},
    {id: 4, name: 'Honda'},
    {id: 5, name: 'Nissan'},
    {id: 6, name: 'Volkswagen'},
    {id: 7, name: 'Hyundai'},
    {id: 8, name: 'Kia'},
  ]

  selectedCars = [];

  limitCars(){
    if (this.selectedCars.length > 3) {
      this.selectedCars = this.selectedCars.filter((s, index) => index < 3);
      this.snackBar.open('You can select a maximum of 3 cars.', 'Close',{duration: 500});
    }
  }
}
