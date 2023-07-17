import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-subject-techer',
  templateUrl: './subject-techer.component.html',
  styleUrls: ['./subject-techer.component.css']
})
export class SubjectTecherComponent {
  greetImg: string = '../../../assets/greet.png';
  constructor(private services: TeacherService, private auth: AuthService) {}
  data: any;
  ngOnInit(): void {
    this.services.getTeacherLog().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  logout() {
    this.auth.logout();
  }
}
