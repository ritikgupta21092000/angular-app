import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DivComponent } from './div/div.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MulComponent } from './mul/mul.component';
import { SubComponent } from './sub/sub.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{ path: "add", component: AddComponent },
{ path: "home", component: HomeComponent },
{ path: "sub", component: SubComponent },
{ path: "mul", component: MulComponent },
{ path: "div", component: DivComponent },
{ path: "user", component: UserComponent },
{ path: "employee", component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
