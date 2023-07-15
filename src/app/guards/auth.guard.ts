import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  route: any;
  constructor(private service: AuthService, route: Router) {}
  canActivate() {
    if (this.service.isLoggin()) {
      return true;
    } else {
      this.route.navigate(['']);
      return false;
    }
  }
}
