import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { jwtDecode } from "jwt-decode"

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userLogin: any
  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:3000/login', { username: userName, password })
                    .pipe(map(resp => {
                        localStorage.setItem('access-token', resp.token)
                        return resp
                      })
                    )
  }
  
  verifyToken(): Observable<{valid: boolean; user: any; }> {
    const token = 'Bearer ' + localStorage.getItem('access-token')
    const headers = new HttpHeaders().set('Authorization', token)
    return this.http.get<{valid: boolean; user: string; }>('http://localhost:3000/verify-token', { headers })
  }

  getUserScopes(): string[] {
    const token = localStorage.getItem('access-token')

    if(!token)
      return []
    
    const decoded: any = jwtDecode(token);
    return decoded.scopes
  }

  getWalletStatus(): string {
    const token = localStorage.getItem('access-token')

    if(!token) return ""
    
    const decoded: any = jwtDecode(token);
    return decoded.walletStatus
  }

  logout(): void {
    localStorage.removeItem('access-token')
  }
}
