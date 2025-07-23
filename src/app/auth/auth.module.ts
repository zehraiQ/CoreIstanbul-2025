import { NgModule } from '@angular/core';
import { RegisterationComponent } from './registeration/registeration.component';
import { SharedModule } from '../shared/shared.module';
import { RXRegisterationComponent } from './rx-registeration/rx-registeration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterationComponent,
    RXRegisterationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
],
})
export class AuthModule { }
