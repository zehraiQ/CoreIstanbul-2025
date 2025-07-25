import { Component, inject } from '@angular/core';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginInterface } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { catchError, EMPTY, filter, switchMap, tap } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent {
  loginForm: IFormGroup<LoginInterface>;
  private fb = inject(RxFormBuilder);
  private loginService = inject(LoginService);
  hasError: boolean = false;
  errorMessage: string = '';
  isLoggingIn: boolean = false;
  loggedInMessage: string = '';
  loggedInUser: LoginInterface = {
    email: 'abc@gmail.com',
    password: '123456'
  }

  constructor() {
    super();
    this.loginForm = this.fb.formGroup<LoginInterface>(new LoginInterface(this.loggedInUser)) as IFormGroup<LoginInterface>;
  }

  login(){
    if(this.loginForm.valid) {
      let form = this.loginForm.value;
      this.hasError = false;
      this.isLoggingIn = false;
      this.loginService.login(form.email, form.password)
      .pipe(
        tap(() => {
          this.isLoggingIn = true;
          this.loggedInMessage = 'Login successful! Welcome ';
        }),
        catchError(error => {
          this.isLoggingIn = false;
          this.hasError = true;
          this.errorMessage = 'Login failed: ' + error.message;
          return EMPTY;
        }),
        filter(token => !!token),
        switchMap(() => this.loginService.me())
      )
      .subscribe();
    }
  }

}
