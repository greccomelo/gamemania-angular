import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //variável criada para armazenar o endereço da API
  url="http://localhost:3000/login";

//insere a depenência HttpClient. É o que comunica com a API.
constructor(private httpClient: HttpClient) { }

//Variável que armazena as configurações dos Headers da requisição. Tá falando que irá enviar o Json.
httpOptions = {
  Headers: new HttpHeaders({'content-type': 'application/json'})
}

// Método GET que irá trazer as informações da API.
getLogin(): Observable<Login[]>{
  return this.httpClient.get<Login[]>(this.url)
}

postLogin(login1: Login): Observable<any> {
  return this.httpClient.post<Login>(this.url, JSON.stringify(login1), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
      observe: "response"
  })
}

}
