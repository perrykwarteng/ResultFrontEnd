import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AdminDashboardComponent } from './Admin/pages/admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { ManageTeachersComponent } from './Admin/pages/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './Admin/pages/manage-students/manage-students.component';
import { ManageSubjectsComponent } from './Admin/pages/manage-subjects/manage-subjects.component';
import { ManageClassesComponent } from './Admin/pages/manage-classes/manage-classes.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginTeacherComponent } from './Teacher/login-teacher/login-teacher.component';
import { ClassTeacherComponent } from './Teacher/class-teacher/class-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginAdminComponent,
    ManageTeachersComponent,
    ManageStudentsComponent,
    ManageSubjectsComponent,
    ManageClassesComponent,
    ErrorComponent,
    HomeComponent,
    LoginTeacherComponent,
    ClassTeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
