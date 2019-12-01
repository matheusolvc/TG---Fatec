import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Boleto } from '../../../Classes/Contas/Boleto';
import { Router } from '@angular/router';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Fornecedor } from '../../../Classes/Fornecedor';
import { UsuarioService } from '../../../services/usuarios.service';
import { Usuario } from '../../../Classes/Usuario';

@Component({
	selector: 'app-consulta-usuario',
	templateUrl: './consulta-usuario.component.html',
	styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
	ngOnInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	constructor(private _usuarioService: UsuarioService, private _router: Router) {
		this.getUsuarios()
	}
	getUsuarios() {
		this._usuarioService.getListaUsuario().subscribe(data => {
			this.usuarios = this.dataToUsuarioVM(data);
			this.dataSource = new MatTableDataSource(this.usuarios);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
			console.log(this.dataSource);
		});
	}
	usuarios: UsuarioData[];
	displayedColumns: string[] = ['Id', 'Email', 'UserName', 'Matricula', 'Role'];
	dataSource = new MatTableDataSource(this.usuarios);
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	Voltar() {
		this._router.navigate(['/consultas'])
	}

	private dataToUsuarioVM(data: Usuario[]): UsuarioData[] {
		let usuarioVM: UsuarioVM[] = [];
		let boletos: Usuario[] = data;
		boletos.forEach(u => {
			this._usuarioService.getUsuario(u.Id).subscribe(data => {
				let role = data;
				usuarioVM.push(new UsuarioVM(u.Id, u.Email, u.UserName, u.Matricula, role));
				this.dataSource = new MatTableDataSource(usuarioVM);
			});
		});
		return usuarioVM;
	}
}


class UsuarioVM implements UsuarioData {
	constructor(
		public Id?: string,
		public Email?: string,
		public UserName?: string,
		public Matricula?: string,
		public Role?: string
	) { }
}



interface UsuarioData {
	Id?: string,
	Email?: string,
	UserName?: string,
	Matricula?: string,
	Role?: string
}
