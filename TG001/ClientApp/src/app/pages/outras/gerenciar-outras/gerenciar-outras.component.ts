import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Outra } from '../../../Classes/Contas/Outra';

@Component({
  selector: 'app-gerenciar-outras',
  templateUrl: './gerenciar-outras.component.html',
  styleUrls: ['./gerenciar-outras.component.css']
})
export class GerenciarOutrasComponent implements OnInit {

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  private model = new Outra();
  private http: HttpClient;

  ngOnInit() {
  }

  Voltar() {
    window.history.back();
  }
  Incluir() {
    this.http.post(window.location.origin + '/api/OutrasContas', JSON.stringify(this.model), httpOptions)
      .subscribe((data: Outra) => this.model = { ...data }), error => console.error(error);
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}
