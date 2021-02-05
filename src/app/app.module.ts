import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';
import { DivComponent } from './div/div.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    DivComponent,
    HomeComponent,
    UserComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
