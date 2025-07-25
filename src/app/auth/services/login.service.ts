
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  private http = inject(HttpClient);
  
  login(email: string, password: string): Observable<string> {
    let body = { email, password };
    return this.http.post<string>(`${environment.apiUrl}/login`, body)
      .pipe(
        tap(token => localStorage.setItem(environment.TOKEN_KEY, token))
      );
  }

  me(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/me`, {
      headers: this.httpHeader
    }).pipe(
      tap(user => {
        localStorage.setItem(environment.USERDATA_KEY, JSON.stringify(user));
      })
    );
  }
}
