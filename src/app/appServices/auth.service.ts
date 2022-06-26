import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../shared/interfaces/authenticate';
import { RegisterUserRequest } from '../shared/interfaces/register-user.request';
import { LoginRequest } from '../shared/requests/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSession!: BehaviorSubject<LoginResponse>;
  app_session_name = '_session.subio.CU';
 
  ret(){return
  "sd"}
  constructor(private http: HttpClient) { 
   // this.currentUserSession = new BehaviorSubject<LoginResponse>()
  }

  //sign up method
  registerUser(params: RegisterUserRequest) {
   return this.http.post<any>(`${environment.apiEndPoint}/auth/RegisterUser`, params)

  }

  //session getter.......
  public get userSession(): LoginResponse {
    return this.currentUserSession.value;
  }

  //login service ...
  login(params:LoginRequest){
   return this.http.post<LoginResponse>(`${environment.apiEndPoint}/auth/login`, params)
   .pipe(map(response=>{
    //encryption and decryption .... is pending here
    localStorage.setItem(this.app_session_name,"")
    return response
   }))

  }




}
