import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { app_session_name } from '../shared/constants/app.constants';
import { LoginResponse } from '../shared/interfaces/authenticate';
import { RegisterUserRequest } from '../shared/interfaces/register-user.request';
import { LoginRequest } from '../shared/requests/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private currentUserSession: BehaviorSubject<>;
   nulll!:any

  private currentUserSession: BehaviorSubject<LoginResponse>;

  app_session_name: string = '_session.subio.CU';
  //currentUserSession = new BehaviorSubject(null)


  constructor(private http: HttpClient) {
    let dataLocal: any = localStorage.getItem(this.app_session_name)
    let dataJoson = JSON.parse(dataLocal)
    //this.currentUserSession.next(dataJoson)
    this.currentUserSession = new BehaviorSubject<LoginResponse|any>(dataJoson)


  }

  //sign up method
  registerUser(params: RegisterUserRequest) {
    return this.http.post<any>(`${environment.apiEndPoint}/auth/RegisterUser`, params)

  }

  //session getter.......
  public get userSession(): any {
    return this.currentUserSession.value;
  }

  //login service ...
  login(params: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.apiEndPoint}/auth/login`, params)
      .pipe(map(response => {
        //encryption and decryption .... is pending here
        localStorage.setItem(this.app_session_name, JSON.stringify(response))
        return response
      }))

  }

  userData(params: LoginRequest) {
    return this.login(params).pipe()
  }

  //logout method 
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.app_session_name);
    this.currentUserSession.next(this.nulll);
  }




}


