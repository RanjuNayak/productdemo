import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';

import { routing } from "./app.routing";


import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { MiscModule } from './misc.module';

import { Product1Module } from './product1/product1.module';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { AppCustomerPreloader } from './app.customerpreloader';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { AddtaskreactivedemoComponent } from './taskdisplay/addtaskreactivedemo/addtaskreactivedemo.component';
import { EdittaskreactivedemoComponent } from './taskdisplay/edittaskreactivedemo/edittaskreactivedemo.component';
import { Task1Component } from './task1/task1.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    Sidebar2Component,
    AddtaskreactivedemoComponent,
    EdittaskreactivedemoComponent,
    Task1Component
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    MiscModule,
    Product1Module,
    FormsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},
    AppCustomerPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
