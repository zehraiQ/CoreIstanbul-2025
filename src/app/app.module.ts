import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './pipes/square.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

import { SharedModule } from './shared/shared.module';

import { InputsComponent } from './form/inputs/inputs.component';
import { DialogsComponent } from './angular-material/dialogs/dialogs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { BaseComponent } from './base.component';
import { UserComponent } from './user/user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    ClassBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    PipesComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    
    InputsComponent,
  
    BootstrapComponent,
    EmployeeListComponent,
    NotFoundComponent,
    EmployeeDetailsComponent,
    BaseComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserModule,BrowserAnimationsModule,
    SharedModule, 
    NgbModule,
    AngularMaterialModule,
    HttpClientModule // Ensure HttpClientModule is imported for HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
