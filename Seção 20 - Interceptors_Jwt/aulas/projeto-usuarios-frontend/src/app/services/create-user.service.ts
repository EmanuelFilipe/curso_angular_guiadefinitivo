import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRequest } from '../interfaces/user-request.interface';
import { ICreateUserResponse } from '../interfaces/create-user-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private httpClient: HttpClient) { }

  createUser(newUser: IUserRequest) {
    return this.httpClient.post<ICreateUserResponse>('http://localhost:3000/create-user', newUser,
      // { 
      //         context: new HttpContext().set(AUTH_TOKEN_ENABLED, true) 
      // }
    )
  }
}
