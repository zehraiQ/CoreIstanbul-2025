import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterationComponent } from "./registeration/registeration.component";
import { RXRegisterationComponent } from "./rx-registeration/rx-registeration.component";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
    { path: '', component: AuthComponent, children: [
        { path: '', redirectTo: 'registeration', pathMatch: 'full' },
        { path: 'registeration', component: RegisterationComponent },
        { path: 'register', component: RXRegisterationComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AuthRoutingModule { }
