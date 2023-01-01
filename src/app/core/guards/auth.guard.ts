import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public loginUser: {
    name: string;
    password: string;
  } = {
      name: "patrick",
      password: "patrick"
    }

  public currentuser: any;

  constructor(private router: Router, private authService: AuthService) {
    this.currentuser = {
      name: "",
      password: ""
    }
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.getDataForm().subscribe((data) => {
      this.currentuser = data;
    })
    if ((this.currentuser.name === this.loginUser.name) && (this.currentuser.password === this.loginUser.password)) {
      return true;
    }
    return this.router.navigateByUrl("auth/login");
  }

}
