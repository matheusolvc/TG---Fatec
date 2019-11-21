import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Contas {
  id: number;
  status: string;
  dtSolicitacao: string;
  dtVencimento: string;
  valor: number;
}

const ELEMENT_DATA: Contas[] = [
  {id: 1987, status: 'Aprovado', dtSolicitacao: '15/11/2019', dtVencimento:'31/11/2019', valor: 80.30},
  {id: 1988, status: 'Rejeitado', dtSolicitacao: '08/11/2019', dtVencimento:'31/11/2019', valor: 72.30},
  {id: 1989, status: 'Pendente', dtSolicitacao: '11/11/2019', dtVencimento:'31/11/2019', valor: 88.30},
  {id: 1990, status: 'Rejeitado', dtSolicitacao: '10/11/2019', dtVencimento:'31/11/2019', valor: 63.30},
  
];

@Component({
  selector: 'app-aprovar-reembolso',
  templateUrl: './aprovar-reembolso.component.html',
  styleUrls: ['./aprovar-reembolso.component.css']
})
export class AprovarReembolsoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'status', 'dtSolicitacao', 'dtVencimento', 'valor', 'options'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
