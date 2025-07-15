import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: false,
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.scss'
})
export class ClassBindingComponent {
  textColor:string="text-success";
  hasError:boolean=false;
  isSpecial:boolean=true;

  messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  } 
}
