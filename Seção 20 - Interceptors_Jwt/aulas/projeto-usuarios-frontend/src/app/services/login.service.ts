import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ILoginResponse } from '../interfaces/login-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<ILoginResponse> {
    const headers = new HttpHeaders().set('useAuth', 'n')
    const payload = { username, password }
    return this.http.post<ILoginResponse>(
      'http://localhost:3000/login', 
      payload, 
      { 
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, false) 
      })
      .pipe(
        map((tokenResponse) => {
          localStorage.setItem('token', tokenResponse.token)
          return tokenResponse
        }),
        catchError((error) => {
          console.error('login.service:error ', error)
          //return of('ocorreu um erro porém retornando ob de sucesso')
          return throwError(() => error)
          //return throwError(() => error + ' modificado no login.service')
        })
      )
  }

  
}
