import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
step1Completed = false;
step2Completed = false; 
step3Completed = false;
}
