import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';


import { from } from 'rxjs';
import {DataValidator} from './validation'
import { FormsModule } from "@angular/forms";
import { AddUserComponent } from './add-user/add-user.component'
import { UsersService } from './users.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataValidator,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
