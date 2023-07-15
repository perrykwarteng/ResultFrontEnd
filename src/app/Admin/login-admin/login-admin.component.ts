import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) {}

  response: any;
  adminLogin = this.fb.group({
    index_number: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.adminLogin.valid) {
      this.auth.login(this.adminLogin.value).subscribe((res) => {
        if (res != null) {
          console.log(res);
          if (res.admin.role == 'superAdmin') {
            localStorage.setItem('token', res.token);
            this.route.navigate(['/admin']);
            Swal.fire('You are ');
          } else {
            console.log('error');
            Swal.fire('Sorry Invalid Input');
          }
        }
      });
    }
  }
}
