import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://backend-pi-node.onrender.com';

  constructor(private http: HttpClient) { }

  validaLogin(user: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/users/login`;
    const body = { user, password };
    return this.http.post<any>(url, body);
  }
}
