import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  standalone: false,
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent {
  noofNotifications = 1000;
  noofNotifications2 = 0;
}
