import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { MaterialComponent } from './material.component';
import { ButtonTogglesComponent } from './button-toggles/button-toggles.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { MenusComponent } from './menus/menus.component';
import { PanelsComponent } from './panels/panels.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {path: '',component:MaterialComponent,
    children:[{path:'',component:BadgesComponent}
      ,{path:'button-toggles',component:ButtonTogglesComponent},
      {path:'buttons',component:ButtonsComponent},
      {path:'dialogs',component:DialogsComponent},
      {path:'icons',component:IconsComponent},
      {path:'menus',component:MenusComponent},
      {path:'panels',component:PanelsComponent},
      {path:'tabs',component:TabsComponent},
      {path:'stepper',component:StepperComponent},
      {path:'typography',component:TypographyComponent}

    ]
  
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
