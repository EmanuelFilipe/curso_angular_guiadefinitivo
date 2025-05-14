import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUpdateUserResponse } from '../interfaces/update-user-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) {}

  updateUser(userInfos: IUserRequest) {
    //const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!)
    const headers = new HttpHeaders().set('useAuth', 'y')
    return this.http.put<IUpdateUserResponse>(
      'http://localhost:3000/update-user', 
      userInfos)
      // { 
      //   context: new HttpContext().set(AUTH_TOKEN_ENABLED, true) 
      // })
    .pipe(map((updateUserResponse) => {
      localStorage.setItem('token', updateUserResponse.token)
      console.log('token', updateUserResponse.token)
      return updateUserResponse
    }));
  }
}
