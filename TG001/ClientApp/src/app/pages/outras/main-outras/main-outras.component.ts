import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OutrasContasService } from '../../../services/outras-contas.service';
import { Router } from '@angular/router';
import { OutraConta } from '../../../Classes/Contas/OutraConta';

@Component({
  selector: 'app-main-outras',
  templateUrl: './main-outras.component.html',
  styleUrls: ['./main-outras.component.css']
})
export class MainOutrasComponent implements OnInit {
	dataSource = new MatTableDataSource();
	displayedColumns: string[] = ['ID', 'DataEmissao', 'DataVencimento', 'Status', 'ValorDocumento', 'Juros', 'ValorAPagar', 'DataPagamento', /*'valRec',*/ 'opcoes'];
	outrasContas: OutraContaData[];

	constructor(private _outrasContasService: OutrasContasService, private _router: Router) {
		this.getOutrasContas();
	}

	getOutrasContas() {
		this._outrasContasService.getListaOutrasContas().subscribe(data => {
			this.outrasContas = this.dataToImpostoVM(data);
			this.dataSource = new MatTableDataSource(this.outrasContas);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
			console.log(this.dataSource);
		})
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	Voltar() {
		this._router.navigate(['/contas'])
	}

	Remover(id: number) {
		if (confirm('Confirma remoção da Conta ' + id + '?')) {
			this.removeBoleto(id);
		}
	}
	removeBoleto(id: number) {
		this._outrasContasService.deleteOutraConta(id).subscribe(data => {
			alert('Contas ' + data.ID + ' removida com sucesso!');
			this.getOutrasContas();
		}, error => alert(error));
	}

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	private dataToImpostoVM(data: OutraConta[]): OutraContaData[] {
		let outraContaVM: OutraContaVM[] = [];
		let outrasContas: OutraConta[] = data;
		outrasContas.forEach(i => {
			outraContaVM.push(new OutraContaVM(i.ID, i.DataEmissao, i.DataVencimento, i.Status, i.ValorDocumento, i.Juros, i.ValorAPagar, i.DataPagamento));
		});
		return outraContaVM;
	}
}

class OutraContaVM implements OutraContaData {
	constructor(
		public ID?: number,
		public DataEmissao?: Date,
		public DataVencimento?: Date,
		public Status?: string,
		public ValorDocumento?: number,
		public Juros?: number,
		public ValorAPagar?: number,
		public DataPagamento?: Date
	) { }
}

interface OutraContaData {
	ID?: number;
	DataEmissao?: Date;
	DataVencimento?: Date;
	Status?: string;
	ValorDocumento?: number;
	Juros?: number;
	ValorAPagar?: number;
	DataPagamento?: Date;
}

