import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  employeeId: number = 0;
  employeeDetails: Employee | undefined;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.route.paramMap
    .pipe(
      tap(params => {
        this.employeeId = +(params.get('id') ?? 0);
      }),
      switchMap(() => this.employeeService.get()),
      tap(employees => {
        this.employeeDetails = employees.find(emp => emp.id === this.employeeId);
        if (!this.employeeDetails) {
          this.router.navigate(['/employee-list']);
        }
      }),
    )
    .subscribe();
  }

  navigateToNext(){
    let nextId = this.employeeId + 1;
    this.router.navigate(['/employee-details', nextId]);
  }

  navigateToList() {
    this.router.navigate(['/employee-list', { id: this.employeeId }]);
  }
}
