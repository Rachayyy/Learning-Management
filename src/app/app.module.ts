import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AssignCourseToUserComponent } from './components/assign-course-to-user/assign-course-to-user.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { CompanyComponent } from './components/company/company.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { UsersComponent } from './components/users/users.component';
import { CreditLogsComponent } from './components/credit-logs/credit-logs.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    NavBarComponent,
    AssignCourseToUserComponent,
    AddCoursesComponent,
    SidebarComponent,
    MenuBarComponent,
    PageNotFoundComponent,
    LoginComponent,
    FeaturesComponent,
    CompanyComponent,
    RegistrationComponent,
    DashboardComponent,
    UserdashboardComponent,
    UsersidebarComponent,
    UsersComponent,
    CreditLogsComponent,
    MycoursesComponent,
    EditUserComponent,
    ViewUserComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
