import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  getAllUrl: any = 'http://127.0.0.1:8000/api/allClass';
  createUrl: string = 'http://127.0.0.1:8000/api/createClass';
  upDateUrl: string = '';
  deleteUrl: string = '';

  assgidnClass: string = 'http://127.0.0.1:8000/api/classAssign';

  constructor(private http: HttpClient) {}

  getAllClass() {
    return this.http.get(this.getAllUrl);
  }

  createClass(data: any) {
    return this.http.post(this.createUrl, data);
  }

  // Assign Class to Teacher
  assignClassTeacher(data: any) {
    return this.http.post(this.assgidnClass, data);
  }
}
