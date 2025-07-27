import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTogglesComponent } from './button-toggles/button-toggles.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { MenusComponent } from './menus/menus.component';
import { PanelsComponent } from './panels/panels.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';


import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { HeaderComponent } from '../header-material/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialComponent } from './material.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ TypographyComponent,
      ButtonsComponent,
      ButtonTogglesComponent,
      IconsComponent,
      BadgesComponent,
      MenusComponent,
      PanelsComponent,
      TabsComponent,
      DialogsComponent,
      StepperComponent,
      HeaderComponent,
      MaterialComponent,],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,SharedModule,FormsModule,NgbModule,MatDialogModule,MatButtonModule
  ]
})
export class AngularMaterialModule { }
