import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://127.0.0.1:8000/api/auth';
  // logoutUrl = '127.0.0.1:8000/api/logout';
  constructor(private http: HttpClient, private routes: Router) {}

  login(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  isLoggin() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    // return this.http.get(this.logoutUrl);
    localStorage.removeItem('token');
    this.routes.navigate(['']);
  }
}
