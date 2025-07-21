import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  standalone: false,
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss'
})
export class BootstrapComponent {
  percentage = 50;
  isImage1Active = true;
  isImage2Active = false;
  isImage3Active = false;
}
