import { Component } from '@angular/core';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-rxregisteration',
  standalone: false,
  templateUrl: './rx-registeration.component.html',
  styleUrl: './rx-registeration.component.scss'
})
export class RXRegisterationComponent {
  formGroup: IFormGroup<UserModel>;
  oldUser: UserModel = {
    username: 'john',
    password: '123456',
    confirmPassword: '123456',
    email: 'john@gmail.com',
    subscribe: true, 
    address: {
      country: 'USA',
      city: 'New York',
      street: '5th Avenue'
    }
  }

  constructor(fb: RxFormBuilder) {
    this.formGroup = fb.formGroup<UserModel>(new UserModel(this.oldUser)) as IFormGroup<UserModel>;
  }


  submitForm(){
    if (this.formGroup.invalid) {
      console.log('Form is invalid');
      return;
    }
    console.log('Form Submitted', this.formGroup.value);
  }
}
