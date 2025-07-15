import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: false,
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {
  textColor: string = "red";
  hasError: boolean = false;
  fontStyleProperty: string = "italic"

  myStyle={
    color: this.textColor,
    fontStyle: this.fontStyleProperty
  }
}
