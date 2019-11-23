import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BoletoService } from '../../../services/boletos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Boleto } from '../../../Classes/Contas/Boleto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-main-boletos',
	templateUrl: './main-boletos.component.html',
	styleUrls: ['./main-boletos.component.css']
})
export class MainBoletosComponent implements OnInit {
	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	constructor(private _boletoService: BoletoService, private _router: Router) {
		this.getBoletos();
	}
	getBoletos() {
		this._boletoService.getListaBoletos().subscribe(data => {
			this.boletos = this.dataToBoletoVM(data);
			this.dataSource = new MatTableDataSource(this.boletos);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
			console.log(this.dataSource);
		});
	}
	boletos: BoletoData[];
	displayedColumns: string[] = ['ID', 'CNPJ', 'DataVencimento', 'Status', 'Editar', 'Remover'];
	dataSource = new MatTableDataSource(this.boletos);
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
		if (confirm('Confirma remoção do Boleto ' + id + '?')) {
			this.removeBoleto(id);
		}
	}
	removeBoleto(id: number) {
		this._boletoService.deleteBoleto(id).subscribe(data => {
			alert('Boleto ' + data.ID + ' removido com sucesso!');
			this.getBoletos();
		}, error => alert(error));
	}

	private dataToBoletoVM(data: Boleto[]): BoletoData[] {
		let boletoVM: BoletoVM[] = [];
		let boletos: Boleto[] = data;
		boletos.forEach(b => {
			boletoVM.push(new BoletoVM(b.ID, b.Fornecedor.CNPJ, b.DataVencimento, b.Status));
		});
		return boletoVM;
	}
}

class BoletoVM implements BoletoData {
	constructor(
		public ID: number,
		public CNPJ?: string,
		public DataVencimento?: Date,
		public Status?: string
	) { }
}

interface BoletoData {
	ID?: number;
	CNPJ?: string;
	DataVencimento?: Date;
	Status?: string;
}
