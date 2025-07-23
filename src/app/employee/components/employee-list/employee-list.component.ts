import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { catchError, debounce, debounceTime, delay, EMPTY, filter, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  employeeList: Employee[] = [];
  hasError: boolean = false;
  errorMessage: string = '';
  lastVisitedId: number = 0;

  constructor(
    private route: ActivatedRoute
  ) {
    // Component initialization logic can go here
    this.employeeService.get()
    .pipe(
      tap(data => {
        this.hasError = false;
        this.errorMessage = '';
        this.employeeList = data;
      }),
      catchError(error => {
        this.hasError = true;
        this.errorMessage = 'Failed to load employee data: ' + error.message;
        return EMPTY;
      }),
      switchMap(() => this.route.paramMap),
      tap(params => {
        this.lastVisitedId = +(params.get('id') ?? 0);
      })
    ).subscribe();
  }

  navigateToDetails(employeeId: number) {
    this.router.navigate(['/employee-details', employeeId]);
  }
}
