import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { StudentService } from 'src/app/service/student.service';
import { SubjectService } from 'src/app/service/subject.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-resluts',
  templateUrl: './add-resluts.component.html',
  styleUrls: ['./add-resluts.component.css'],
})
export class AddReslutsComponent {
  constructor(
    private services: TeacherService,
    private student: StudentService,
    private fb: FormBuilder,
    private auth: AuthService,
    private subject: SubjectService
  ) {}
  data: any;
  students: any;
  sub: any;
  ngOnInit(): void {
    this.services.getTeacherLog().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });

    this.student.getAllStudents().subscribe((res) => {
      this.students = res;
      console.log(this.data);
    });

    this.subject.getSibjects().subscribe((res) => {
      this.sub = res;
    });
  }
  logout() {
    this.auth.logout();
  }
}
