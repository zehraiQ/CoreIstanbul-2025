import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
