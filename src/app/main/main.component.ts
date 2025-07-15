import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
 fullName = 'Abdulrahman bilal';
 color = 'red';
 hasError = true;
 isLoggedIn = true;
 price = 1000000.234;
 today = new Date();
  square = 5;


messageClasses ={
  "color": this.color,
  "fontStyle": "italic",
}

cars = ["BMW", "Mercedes", "Audi", "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "Volkswagen", "Hyundai"];


}
