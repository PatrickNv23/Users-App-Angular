import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm;
  public loginSubmitted: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginSubmitted = false;
    this.loginForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    })
  }

  submit() {
    this.loginSubmitted = true;
    this.authService.setDataForm(this.loginForm.value);
    this.router.navigateByUrl("panel/user");
  }
}
