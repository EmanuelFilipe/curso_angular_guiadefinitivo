import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralInfosService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    console.log('Config:service');
    this.headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('access-token')
    );
  }

  getIncidents(): Observable<{ day: number }> {
    return this.http.get<{ day: number }>('http://localhost:3000/incidents', {
      headers: this.headers,
    });
  }

  getPendingPayments(): Observable<{ pending: number }> {
    return this.http.get<{ pending: number }>(
      'http://localhost:3000/pending-payments',
      { headers: this.headers }
    );
  }

  getNewAccount(): Observable<{ accounts: number }> {
    return this.http.get<{ accounts: number }>(
      'http://localhost:3000/new-accounts',
      { headers: this.headers }
    );
  }

  getActiveUser(): Observable<{ users: number }> {
    return this.http.get<{ users: number }>(
      'http://localhost:3000/active-users',
      { headers: this.headers }
    );
  }
}
