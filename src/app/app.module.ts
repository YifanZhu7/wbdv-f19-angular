
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/UserService';
import { AdminUsersComponent } from './admin-users/admin-users.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
