import { NgModule } from '@angular/core';
import { RegisterationComponent } from './registeration/registeration.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from "../app-routing.module";
import { RXRegisterationComponent } from './rx-registeration/rx-registeration.component';



@NgModule({
  declarations: [
    RegisterationComponent,
    RXRegisterationComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
],
  bootstrap: [RXRegisterationComponent],
})
export class AuthModule { }
