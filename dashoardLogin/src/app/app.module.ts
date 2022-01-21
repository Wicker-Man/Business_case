import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDashboardLoginComponent } from './form-dashboard-login/form-dashboard-login.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component'
import {Dashboard2Component} from './dashboard2/dashboard2.component'

@NgModule({
  declarations: [
    AppComponent,
    FormDashboardLoginComponent,
    Dashboard1Component,
    Dashboard2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
