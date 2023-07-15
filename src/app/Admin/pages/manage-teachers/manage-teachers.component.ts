import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ClassService } from 'src/app/service/class.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css'],
})
export class ManageTeachersComponent implements OnInit {
  data: any;
  classe: any;
  admin: any;
  adminUser: any;
  constructor(
    private service: TeacherService,
    private fb: FormBuilder,
    private classes: ClassService,
    private auth: AuthService
  ) {}

  createAdmin = this.fb.group({
    first_name: ['', Validators.required],
    other_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    asSubjectTeacher: ['', Validators.required],
    asClassTeacher: ['', Validators.required],
    number: ['', Validators.required],
    location: ['', Validators.required],
  });

  teachera = this.fb.group({
    teacher: ['', Validators.required],
    class: ['', Validators.required],
  });

  ngOnInit(): void {
    this.admin.getCurrentAdmin().subscribe((res: any) => {
      this.adminUser = res;
    });

    this.service.getTeachers().subscribe((data) => {
      this.data = data;
      // console.log(data);
    });

    // GetClass
    this.classes.getAllClass().subscribe((data) => {
      this.classe = data;
      // console.log(this.classe);log
      console.log(this.classe.classCode);
    });
  }

  // Create Teacher
  onSubmit() {
    if (this.createAdmin.valid) {
      this.service.createTeacher(this.createAdmin.value).subscribe((res) => {
        // console.log(res + 'Successful');
      });
    } else {
      console.log('Bad Entery');
    }
  }
  // Assign Teacher
  assignClass() {
    if (this.teachera.valid) {
      this.classes.assignClassTeacher(this.teachera.value).subscribe((res) => {
        // console.log(res + 'Successful');
        console.log('successful');
      });
    } else {
      console.log('Bad Entery');
    }
  }

  logout() {
    this.auth.logout();
  }
}
