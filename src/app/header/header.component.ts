import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseComponent {
  constructor() {
    super();
  }

}
