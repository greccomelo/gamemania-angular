import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login1 } from '../models/login1';

@Injectable({
  providedIn: 'root'
})
export class Login1Service {

  url1 = "http://localhost:3000/login"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'}),
    observe: "response"
  }

  login1(user1: Login1): Observable<any>{
    return this.httpClient.post(this.url1, JSON.stringify(user1), {
      headers: new HttpHeaders({'content-type': 'application/json'}),
      observe: "response"
    })
  }
}
