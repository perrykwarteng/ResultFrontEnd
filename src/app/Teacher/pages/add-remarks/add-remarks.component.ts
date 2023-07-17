import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-remarks',
  templateUrl: './add-remarks.component.html',
  styleUrls: ['./add-remarks.component.css'],
})
export class AddRemarksComponent implements OnInit {
  data: any;
  res: any;
  constructor(
    // private service: ResultsService,
    private student: StudentService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.student.getAllStudents().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });

    // this.service.getAllRemarks().subscribe((res: any) => {
    //   this.res = res;
    // });
  }

  remarksForm = this.fb.group({
    studentIndex: ['', Validators.required],
    attendance: ['', Validators.required],
    outOf: ['', Validators.required],
    promoted: ['', Validators.required],
    conduct: ['', Validators.required],
    attitude: ['', Validators.required],
    interest: ['', Validators.required],
    classTeacherRemarks: ['', Validators.required],
    headTeacherRemarks: ['', Validators.required],
    date: ['', Validators.required],
  });

  // remarksSubmit() {
  //   if (this.remarksForm.valid) {
  //     this.service
  //       .createRemarks(this.remarksForm.value)
  //       .subscribe((res: any) => {
  //         console.log('Success');
  //       });
  //   }
  // }

  logout() {
    this.auth.logout();
  }
}
