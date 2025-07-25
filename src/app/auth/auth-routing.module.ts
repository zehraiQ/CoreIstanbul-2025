import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterationComponent } from "./registeration/registeration.component";
import { RXRegisterationComponent } from "./rx-registeration/rx-registeration.component";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: '', component: AuthComponent, children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'registeration', component: RegisterationComponent },
        { path: 'register', component: RXRegisterationComponent },
        { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AuthRoutingModule { }
