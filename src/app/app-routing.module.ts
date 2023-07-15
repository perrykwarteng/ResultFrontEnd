import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/pages/admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';

const routes: Routes = [
  {
    path: 'adminLogin',
    component: LoginAdminComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
