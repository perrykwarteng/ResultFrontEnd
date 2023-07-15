import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/pages/admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { ManageTeachersComponent } from './Admin/pages/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './Admin/pages/manage-students/manage-students.component';
import { ManageSubjectsComponent } from './Admin/pages/manage-subjects/manage-subjects.component';
import { ManageClassesComponent } from './Admin/pages/manage-classes/manage-classes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminLogin',
    component: LoginAdminComponent,
  },
  // {
  //   path: 'teacherLogin',
  //   component: TeacherLoginComponent,
  // },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageTeachers',
    component: ManageTeachersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageStudents',
    component: ManageStudentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageSubjects',
    component: ManageSubjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageClass',
    component: ManageClassesComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'results',
  //   component: ResultsComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
