import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-class-teacher',
  templateUrl: './class-teacher.component.html',
  styleUrls: ['./class-teacher.component.css'],
})
export class ClassTeacherComponent implements OnInit {
  greetImg: string = '../../../assets/greet.png';

  data: any;
  constructor(private services: TeacherService, private auth: AuthService) {}

  ngOnInit(): void {
    this.services.getTeacherLog().subscribe((res:any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  logout() {
    this.auth.logout();
  }
}
