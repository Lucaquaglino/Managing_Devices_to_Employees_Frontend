import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { UserInfo } from './interfaces/user-info';
@Injectable({
  providedIn: 'root'
})
export class AppSerivceService {
urlUtenti:string="http://localhost:3001/utenti"


  constructor(private http:HttpClient) { }


  getUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.urlUtenti}`);
  }


}
