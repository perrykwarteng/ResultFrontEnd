import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
})
export class ManageSubjectsComponent implements OnInit {
  res: any;
  admin: any;
  adminUser: any;
  constructor(
    private service: SubjectService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.service.getSibjects().subscribe((res: any) => {
      this.res = res;
      console.log(res);
    });

    this.admin.getCurrentAdmin().subscribe((res: any) => {
      this.adminUser = res;
    });
  }

  subjectForm = this.fb.group({
    subjectCode: ['', Validators.required],
    subjectName: ['', Validators.required],
  });

  createSubject() {
    if (this.subjectForm.valid) {
      this.service.createSubject(this.subjectForm.value).subscribe((res) => {
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
