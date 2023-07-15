import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  get: string = 'http://127.0.0.1:8000/api/getSuperAdmin';
  constructor(private http: HttpClient) {}
  getCurrentAdmin() {
    return this.http.get(this.get);
  }
}
