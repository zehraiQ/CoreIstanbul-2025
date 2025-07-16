import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  selectedIndex = 1;

  showTab(index: number): void {
    console.log(`Tab ${index} selected`);
    this.selectedIndex = index; 
  }
}
