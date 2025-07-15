import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: false,
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.scss'
})
export class TemplateReferenceVariableComponent {
  printMsg(value:any)
  {
    console.log("Hello from typescript");
    console.log("Input value is ", value);
  }
}
