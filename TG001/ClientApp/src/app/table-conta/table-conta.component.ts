import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Contas {
  id: number;
  emissao: string;
  vencimento: string;
  status: string;
  valor: number;
  juros: number;
  total: number;
  dtPgto: string;
  valRec: number;
}

const ELEMENT_DATA: Contas[] = [
  {id: 1, emissao: '01/11/2019', vencimento: '15/11/2019', status:'Pendente', valor: 123.30, juros: 0, total: 123.30, dtPgto: '-', valRec: 0},
  {id: 2, emissao: '02/11/2019', vencimento: '15/11/2019', status:'Pago', valor: 321.12, juros: 0, total: 321.12, dtPgto: '10/11/2019', valRec: 321.12},
  {id: 3, emissao: '03/11/2019', vencimento: '30/11/2019', status:'Pago', valor: 147.50, juros: 0, total: 147.50, dtPgto: '11/11/2019', valRec: 147.50},
  {id: 4, emissao: '03/11/2019', vencimento: '30/11/2019', status:'Pago', valor: 258.36, juros: 0, total: 258.36, dtPgto: '09/11/2019', valRec: 258.36},
  {id: 5, emissao: '02/11/2019', vencimento: '15/11/2019', status:'Pendente', valor: 369.78, juros: 0, total: 369.78, dtPgto: '-', valRec: 0},
  {id: 6, emissao: '01/11/2019', vencimento: '15/11/2019', status:'Pago', valor: 214.58, juros: 0, total: 214.58, dtPgto: '05/11/2019', valRec: 214.58},
  {id: 7, emissao: '01/11/2019', vencimento: '30/11/2019', status:'Pendente', valor: 357.41, juros: 0, total: 357.41, dtPgto: '-', valRec: 0},
  {id: 8, emissao: '02/11/2019', vencimento: '30/11/2019', status:'Pendente', valor: 489.87, juros: 0, total: 489.87, dtPgto: '-', valRec: 0},
  {id: 9, emissao: '03/11/2019', vencimento: '15/11/2019', status:'Pago', valor: 159.24, juros: 0, total: 159.24, dtPgto: '06/11/2019', valRec: 159.24},
  {id: 10, emissao: '04/11/2019', vencimento: '15/11/2019', status:'Pago', valor: 569.37, juros: 0, total: 569.37, dtPgto: '06/11/2019', valRec: 569.37},
];

@Component({
  selector: 'table-conta',
  templateUrl: './table-conta.component.html',
  styleUrls: ['./table-conta.component.css']
})
export class TableContaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'emissao', 'vencimento', 'status', 'valor', 'juros', 'total', 'dtPgto', 'valRec', 'options'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
