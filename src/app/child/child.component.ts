import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input('parentData') categoryId: number =0;
  @Output() childEvent = new EventEmitter<number>();

  sendMsgToParent() {
    this.childEvent.emit(this.categoryId + 5);
  }
}
