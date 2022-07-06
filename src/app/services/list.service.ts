import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //BOA PRÁTICA=> quando é privado ele fica acessivel só na classe e eu não consigo acessar no componente
  //Normalmente em um projeto grande as URLs ficam em um arquivo separado
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  //faz a requisição HTTP
  //o Observable vai observar se isso vai ocorrer da maneira correta
  //isso é um padrão do angular, para ele entender o retorno do http e o observable fica observando
  //se esse array de animais vai chegar ou não no retorno da API
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
