import { Component, OnInit, ViewChild } from '@angular/core';
import { ImpostosService } from '../../../services/imposto.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Imposto } from '../../../Classes/Contas/Imposto';

@Component({
	selector: 'app-main-impostos',
	templateUrl: './main-impostos.component.html',
	styleUrls: ['./main-impostos.component.css']
})
export class MainImpostosComponent implements OnInit {
	dataSource = new MatTableDataSource();
	displayedColumns: string[] = ['ID', 'DataEmissao', 'DataVencimento', 'Status', 'ValorDocumento', 'Juros', 'ValorAPagar', 'DataPagamento', /*'valRec',*/ 'opcoes'];
	impostos: ImpostoData[];

	constructor(private _impostoService: ImpostosService, private _router: Router) {
		this.getImpostos();
	}

	getImpostos() {
		this._impostoService.getListaImpostos().subscribe(data => {
			this.impostos = this.dataToImpostoVM(data);
			this.dataSource = new MatTableDataSource(this.impostos);
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
		if (confirm('Confirma remoção do Imposto ' + id + '?')) {
			this.removeBoleto(id);
		}
	}
	removeBoleto(id: number) {
		this._impostoService.deleteImposto(id).subscribe(data => {
			alert('Imposto ' + data.ID + ' removido com sucesso!');
			this.getImpostos();
		}, error => alert(error));
	}

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	private dataToImpostoVM(data: Imposto[]): ImpostoData[] {
		let impostoVM: ImpostoVM[] = [];
		let impostos: Imposto[] = data;
		impostos.forEach(i => {
			impostoVM.push(new ImpostoVM(i.ID, i.DataEmissao, i.DataVencimento, i.Status, i.ValorDocumento, i.Juros, i.ValorAPagar, i.DataPagamento));
		});
		return impostoVM;
	}
}

class ImpostoVM implements ImpostoData {
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

interface ImpostoData {
	ID?: number;
	DataEmissao?: Date;
	DataVencimento?: Date;
	Status?: string;
	ValorDocumento?: number;
	Juros?: number;
	ValorAPagar?: number;
	DataPagamento?: Date;
}
