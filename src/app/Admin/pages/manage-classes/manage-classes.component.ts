import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ClassService } from 'src/app/service/class.service';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
})
export class ManageClassesComponent implements OnInit {
  data: any;
  adminUser: any;
  admin: any;
  constructor(
    private classes: ClassService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.admin.getCurrentAdmin().subscribe((res: any) => {
      this.adminUser = res;
    });

    this.classes.getAllClass().subscribe((res: any) => {
      this.data = res;
    });
  }

  classForm = this.fb.group({
    classCode: ['', Validators.required],
    className: ['', Validators.required],
  });

  createClass() {
    if (this.classForm.valid) {
      this.classes.createClass(this.classForm.value).subscribe((res: any) => {
        console.log('successful');
      });
    } else {
      console.log('Bad Input');
    }
  }

  logout() {
    this.auth.logout();
  }
}
