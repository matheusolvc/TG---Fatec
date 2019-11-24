import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imposto } from '../../../Classes/Contas/Imposto';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpostosService } from '../../../services/imposto.service';
import { FornecedorService } from '../../../services/fornecedor.service';

@Component({
	selector: 'app-gerenciar-impostos',
	templateUrl: './gerenciar-impostos.component.html',
	styleUrls: ['./gerenciar-impostos.component.css']
})
export class GerenciarImpostosComponent implements OnInit {
	impostoForm: FormGroup;
	title: string = "Cadastro";
	impostoID: number;
	errorMessage: any;
	imposto: Imposto;

	constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
		private _impostoService: ImpostosService, private _fornecedorService: FornecedorService, private _router: Router) {
		if (this._avRoute.snapshot.params["id"]) {
			this.impostoID = this._avRoute.snapshot.params["id"];
		}

		this.impostoForm = this._fb.group(
			{
				ID: [''],
				Status: ['', Validators.required],
				DataEmissao: [Date, Validators.required],
				DataVencimento: [Date, Validators.required],
				TipoConta: ['', Validators.required],
				ValorDocumento: ['', Validators.required],
				Multa: [''],
				Juros: [''],
				ValorAPagar: [''],
				PeriodoApuracaoInicio: [Date, Validators.required],
				PeriodoApuracaoFim: [Date, Validators.required],
				CodigoImposto: ['', Validators.required],
				LinhaDigitavel: ['', Validators.required],
				//FornecedorID: ['', Validators.required],
				CNPJMatriz: ['', Validators.required],
				UsuarioID: [''],
				DataCriacao: [''],
				DataAlteracao: [''],
				DataPagamento: [''],
				NumeroDocumento: ['',Validators.required],
				Serie: ['', Validators.required],
				Usuario: [''],
			});
	}

	Resetar() {
		this.ngOnInit();
	}

	ngOnInit() {
		if (this.impostoID > 0) {
			this.title = "Alteração";
			this._impostoService.getImposto(this.impostoID).subscribe((data: Imposto) => { this.impostoForm.setValue(data) }, error => {
				console.log(error);
				alert('Conta não encontrada!');
				this._router.navigate(['/contas/impostos']);
			});
			console.log(this.impostoForm);
		}
	}

	Voltar() {
		this._router.navigate(['/contas/impostos']);
	}
	Confirmar() {
		if (!this.impostoForm.valid) {
			return;
		}
		if (this.impostoID > 0) {
			if (confirm('Confirma a Alteração do Imposto' + this.impostoID + '?')) {
				this._impostoService.updateImposto(this.impostoID, this.impostoForm.value)
					.subscribe((data) => {
						alert('Imposto ' + this.impostoID + ' Alterado com sucesso!');
						this._router.navigate(['/contas/impostos']);
					}, error => this.errorMessage = error)
			}
		}
		else {
			this._impostoService.saveImposto(this.impostoForm.value)
				.subscribe((data) => {
					alert('Imposto ' + data.ID + 'Cadastrado com sucesso!');
					this._router.navigate(['/contas/impostos']);
				}, error => this.errorMessage = error)
		}
	}

	@ViewChild("IDFornecedor", { static: false }) fornField: ElementRef
	CarregarFornecedor() {
		this._fornecedorService.getFornecedor(this.impostoForm.get(["FornecedorID"]).value).subscribe(data => {
			let CNPJ = data.CNPJ;
			let nome = data.RazaoSocial;
			this.impostoForm.get(["Fornecedor", "CNPJ"]).patchValue(CNPJ);
			this.impostoForm.get(["Fornecedor", "RazaoSocial"]).patchValue(nome);
		}, error => {
			alert("Fornecedor não encontrado.");
			this.impostoForm.get(["FornecedorID"]).patchValue('');
			this.impostoForm.get(["Fornecedor", "CNPJ"]).patchValue('');
			this.impostoForm.get(["Fornecedor", "RazaoSocial"]).patchValue('');
			this.fornField.nativeElement.focus();
		})
	}

}
