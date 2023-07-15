import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  getAllUrl: any = 'http://127.0.0.1:8000/api/allSubject';
  createUrl: string = 'http://127.0.0.1:8000/api/createSubject';
  upDateUrl: string = '';
  deleteUrl: string = '';
  getSibjects() {
    return this.http.get(this.getAllUrl);
  }

  createSubject(data:any) {
    return this.http.post(this.createUrl, data);
  }

  updateTeacher() {}

  deleteTeacher() {}
}
