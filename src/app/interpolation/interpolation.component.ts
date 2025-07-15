import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: false,
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {
  fullName:string = "Core Istanbul";
  url:string = window.location.href;
}
