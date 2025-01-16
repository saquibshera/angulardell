import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"services",component:ServicesComponent},
  {path:"employee",component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
