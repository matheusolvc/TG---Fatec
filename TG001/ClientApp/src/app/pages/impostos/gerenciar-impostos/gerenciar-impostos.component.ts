import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imposto } from '../../../Classes/Contas/Imposto';

@Component({
  selector: 'app-gerenciar-impostos',
  templateUrl: './gerenciar-impostos.component.html',
  styleUrls: ['./gerenciar-impostos.component.css']
})
export class GerenciarImpostosComponent implements OnInit {

  constructor(httpclient: HttpClient) {
    this.http = httpclient;
  }
  private model = new Imposto();
  private http: HttpClient;
  private consulta = true;

  ngOnInit() {
  }

  Voltar() {
    window.history.back();
  }

  Incluir() {
    this.http.post(window.location.origin + '/api/Imposto', JSON.stringify(this.model), httpOptions)
      .subscribe((data: Imposto) => this.model = { ...data }), error => console.error(error);
  }

  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
