import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getallUrl: string = 'http://127.0.0.1:8000/api/getAllStudents';
  createUrl: string = 'http://127.0.0.1:8000/api/createStudents';
  upDateUrl: string = '';
  deleteUrl: string = '';
  getAllStudents() {
    return this.http.get(this.getallUrl);
  }

  createStudent(data: any) {
    return this.http.post(this.createUrl, data);
  }

  updateStudent() {}

  deleteStudent() {}
}
