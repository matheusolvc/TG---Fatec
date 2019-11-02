import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boleto } from '../../../Classes/Contas/Boleto';

@Component({
  selector: 'app-gerenciar-boletos',
  templateUrl: './gerenciar-boletos.component.html',
  styleUrls: ['./gerenciar-boletos.component.css']
})
export class GerenciarBoletosComponent implements OnInit {

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  private model = new Boleto();
  private http: HttpClient;

  ngOnInit() {
  }

  Voltar() {
    window.history.back();
  }
  Incluir() {
    this.http.post(window.location.origin + '/api/Boletos', JSON.stringify(this.model), httpOptions)
      .subscribe((data: Boleto) => this.model = { ...data }), error => console.error(error);
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}
