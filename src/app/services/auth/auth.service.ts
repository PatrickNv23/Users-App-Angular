import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginObservable = new Subject();

  constructor() {
  }

  setDataForm(data: any) {
    this.loginObservable.next(data);
  }

  getDataForm() {
    return this.loginObservable.asObservable();
  }
}
