import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent {
  res: any;
  data: any;
  adminUser: any;
  admin: any;
  constructor(
    private service: StudentService,
    private fb: FormBuilder,
    private classes: ClassService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((res: any) => {
      this.res = res;
    });

    this.admin.getCurrentAdmin().subscribe((res: any) => {
      this.adminUser = res;
    });

    this.classes.getAllClass().subscribe((res: any) => {
      this.data = res;
    });
  }

  studentForm = this.fb.group({
    first_name: ['', Validators.required],
    other_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    class: ['', Validators.required],
    guidance: ['', Validators.required],
    guidance_number: ['', Validators.required],
    number: ['', Validators.required],
    location: ['', Validators.required],
  });

  createStudents() {
    if (this.studentForm.valid) {
      this.service.createStudent(this.studentForm.value).subscribe((res) => {
        console.log('successful');
      });
    } else {
      console.log('Bad entery');
    }
  }

  logout() {
    this.auth.logout();
  }
}
