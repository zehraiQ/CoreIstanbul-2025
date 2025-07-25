import { NgModule } from '@angular/core';
import { RegisterationComponent } from './registeration/registeration.component';
import { SharedModule } from '../shared/shared.module';
import { RXRegisterationComponent } from './rx-registeration/rx-registeration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterationComponent,
    RXRegisterationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
],
})
export class AuthModule { }
