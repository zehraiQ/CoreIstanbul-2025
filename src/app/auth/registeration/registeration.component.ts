import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../validators/password.validator';
import { UsernameValidation } from '../validators/username.validator';

@Component({
  selector: 'app-registeration',
  standalone: false,
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.scss'
})
export class RegisterationComponent {
  registerationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerationForm = this.fb.group({
      username:['', [Validators.required, UsernameValidation]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      email: [''],
      alternativeEmails: this.fb.array([]),
      subscribe: [false, Validators.required],
      address: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
      }, { validators: Validators.required }),
    }, { validators: PasswordValidation });
  }

  submitForm(){
    console.log('Form Submitted', this.registerationForm);
  }


  get username(){
    return this.registerationForm.controls['username'];
  }
  get password(){
    return this.registerationForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerationForm.controls['confirmPassword'];
  }
  get email(){
    return this.registerationForm.controls['email'];
  }

  get alternativeEmails(){
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }

  get country(){
    return this.registerationForm.controls['address']?.get('country');
  }
  get city(){
    return this.registerationForm.controls['address']?.get('city');
  }
  get street(){
    return this.registerationForm.controls['address']?.get('street');
  }

  fillData(){
    this.registerationForm.patchValue({
      username: 'john_doe',
      email: 'john@google.com',
      address: {
        country: 'USA',
        city: 'New York',
        street: '5th Avenue'
      }
    });
  }

  subscribe(){
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(value => {
      console.log('Subscribe value changed:', value);
      if (value) {
        this.email.setValidators([Validators.required, Validators.email]);
        this.email.updateValueAndValidity();
      } else {
        this.email.clearValidators();
        this.email.updateValueAndValidity();
      }
    });
  }

  addEmail(){
    this.alternativeEmails.push(this.fb.control(''));
  }
}
