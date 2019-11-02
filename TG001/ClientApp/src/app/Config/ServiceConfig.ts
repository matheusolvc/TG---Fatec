import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Imposto } from '../Classes/Contas/Imposto';

@Injectable()
export class GerenciarImpostosService {
  constructor(private http: HttpClient) {
  }
  get(url: string): Observable<HttpResponse<Imposto>> {
    return this.http.get<Imposto>(this.baseUrl + url, { observe: 'response' });
  }

  post(url: string, model) {
    this.http.post(this.baseUrl + url, JSON.stringify(model), this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private baseUrl: string = window.location.origin;
}
