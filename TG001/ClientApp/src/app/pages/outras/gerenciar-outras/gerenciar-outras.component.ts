import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutraConta } from '../../../Classes/Contas/OutraConta';

@Component({
  selector: 'app-gerenciar-outras',
  templateUrl: './gerenciar-outras.component.html',
  styleUrls: ['./gerenciar-outras.component.css']
})
export class GerenciarOutrasComponent implements OnInit {

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }
  private model = new OutraConta();
  private http: HttpClient;

  ngOnInit() {
  }

  Voltar() {
    window.history.back();
  }
  Incluir() {
    this.http.post(window.location.origin + '/api/OutrasContas', JSON.stringify(this.model), httpOptions)
      .subscribe((data: OutraConta) => this.model = { ...data }), error => console.error(error);
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}
