import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

//variável para armazenamento de endereço da API
  url = "http://localhost:3000/noticias"

  //insere a dependencia que comunica com a API
  constructor(private httpClient: HttpClient) { }

  //variável que armazena as configurações de header da requisição.
  httpOptions = {
    Headers: new HttpHeaders ({ 'content-type': 'application/json' })
  }

  //método GET que irá trazer as notícias da API.
  getNoticias(): Observable<Noticias[]> {
    return this.httpClient.get<Noticias[]>(this.url)
  }

}
