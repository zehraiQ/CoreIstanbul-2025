import { Component } from '@angular/core';

@Component({
  selector: 'app-button-toggles',
  standalone: false,
  templateUrl: './button-toggles.component.html',
  styleUrl: './button-toggles.component.scss'
})
export class ButtonTogglesComponent {
  isActive: boolean = true;
}
