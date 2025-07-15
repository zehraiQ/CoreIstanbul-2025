import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  categoryId = 3;
  childCategoryId = 0;

  getChildMessage(msg: number) {
    this.childCategoryId = msg;
  }
}
