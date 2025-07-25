import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  httpHeader: HttpHeaders;

  constructor() {
    this.httpHeader = new HttpHeaders({
      Authorization: localStorage.getItem(environment.TOKEN_KEY) || ''
    });
   }
}
