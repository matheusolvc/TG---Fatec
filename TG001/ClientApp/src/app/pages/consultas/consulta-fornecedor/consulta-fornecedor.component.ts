import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Boleto } from '../../../Classes/Contas/Boleto';
import { Router } from '@angular/router';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../Classes/Fornecedor';

@Component({
	selector: 'app-consulta-fornecedor',
	templateUrl: './consulta-fornecedor.component.html',
	styleUrls: ['./consulta-fornecedor.component.css']
})
export class ConsultaFornecedorComponent implements OnInit {
	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	constructor(private _fornecedorService: FornecedorService, private _router: Router) {
		this.getFornecedores()
	}
	getFornecedores() {
		this._fornecedorService.getListaFornecedores().subscribe(data => {
			this.fornecedores = this.dataToFornecedorVM(data);
			this.dataSource = new MatTableDataSource(this.fornecedores);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
			console.log(this.dataSource);
		});
	}

	fornecedores: FornecedorData[];
	displayedColumns: string[] = ['ID', 'CNPJ', 'RazaoSocial', 'Email','Cidade','UF'];
	dataSource = new MatTableDataSource(this.fornecedores);
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	Voltar() {
		this._router.navigate(['/consultas'])
	}

	private dataToFornecedorVM(data: Boleto[]): FornecedorData[] {
		let fornecedorVM: FornecedorVM[] = [];
		let boletos: Fornecedor[] = data;
		boletos.forEach(f => {
			fornecedorVM.push(new FornecedorVM(f.ID, f.CNPJ, f.RazaoSocial, f.Email, f.Cidade, f.UF));
		});
		return fornecedorVM;
	}
}

class FornecedorVM implements FornecedorData {
	constructor(
		public ID?: number,
		public CNPJ?: string,
		public RazaoSocial?: string,
		public Email?: string,
		public Cidade?: string,
		public UF?: string,
	) { }
}

interface FornecedorData {
	ID?: number,
	CNPJ?: string,
	RazaoSocial?: string,
	Email?: string,
	Cidade?: string,
	UF?: string
}
