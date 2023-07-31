import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  greetImg: string = '../../../assets/greet.png';
  isDispaly: boolean = false;
  // toggle() {
  //   this.isDispaly = !this.isDispaly;
  // }

  adminUser: any;
  constructor(private admin: AdminService, private auth: AuthService) {}

  ngOnInit(): void {
    this.admin.getCurrentAdmin().subscribe((res) => {
      this.adminUser = res;
    });
  }

  logout() {
    this.auth.logout();
  }
}
