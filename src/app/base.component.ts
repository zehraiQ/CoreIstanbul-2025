import { Component } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Component({
  selector: 'app-base',
  standalone: false,
  template: '',
})
export class BaseComponent {
  label= {
    CoreIstanbul: 'Core Istanbul',
    Login: 'Login',
    Register: 'Register',
    Registeration: 'Registeration',
    EmployeeList: 'Employee List',
    ClassBinding: 'Class Binding',
    EventBinding: 'Event Binding'
  };
  get userContext() {
    return JSON.parse(localStorage.getItem(environment.USERDATA_KEY) || '{}');
  }

  userHasRoles(role: string): boolean {
    return this.userContext?.permissions?.includes(role) || false;
  }
}
