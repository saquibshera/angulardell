import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
