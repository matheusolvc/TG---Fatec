import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boleto } from '../../../Classes/Contas/Boleto';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from '../../../services/boletos.service';
import { FornecedorService } from '../../../services/fornecedor.service';

@Component({
	selector: 'app-gerenciar-boletos',
	templateUrl: './gerenciar-boletos.component.html',
	styleUrls: ['./gerenciar-boletos.component.css']
})
export class GerenciarBoletosComponent implements OnInit {
	boletoForm: FormGroup;
	title: string = "Cadastro";
	boletoID: number;
	errorMessage: any;
	boleto: Boleto;

	constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
		private _boletoService: BoletoService, private _fornecedorService: FornecedorService, private _router: Router) {
		if (this._avRoute.snapshot.params["id"]) {
			this.boletoID = this._avRoute.snapshot.params["id"];
		}

		this.boletoForm = this._fb.group(
			{
				ID: [''],
				Status: ['', Validators.required],
				FornecedorID: ['', Validators.required],
				Fornecedor: this._fb.group({
					ID: [''],
					CNPJ: [''],
					RazaoSocial: [''],
					CodBanco: [''],
					Agencia: [''],
					Conta: [''],
					Telefone: [''],
					Email: [''],
					Endereco: [''],
					Numero: [''],
					Bairro: [''],
					Cidade: [''],
					UF: [''],
				}),
				UsuarioID: [''],
				DataEmissao: [Date, Validators.required],
				DataVencimento: [Date, Validators.required],
				TipoConta: ['', Validators.required],
				ValorDocumento: ['', Validators.required],
				Multa: [''],
				Juros: [''],
				ValorAPagar: [''],
				LinhaDigitavel: ['', Validators.required],
				DataCriacao: [''],
				DataAlteracao: [''],
				DataPagamento: [''],
				Usuario: [''],
			});
	}

	Resetar() {
		this.ngOnInit();
	}

	ngOnInit() {
		if (this.boletoID > 0) {
			this.title = "Alteração";
			this._boletoService.getBoleto(this.boletoID).subscribe((data: Boleto) => { this.boletoForm.setValue(data) });
			console.log(this.boletoForm);
		}
	}

	Voltar() {
		this._router.navigate(['/contas/boletos']);
	}
	Confirmar() {
		if (!this.boletoForm.valid) {
			return;
		}
		if (this.boletoID > 0) {
			if (confirm('Confirma a Alteração do Boleto' + this.boletoID + '?')) {
				this._boletoService.updateBoleto(this.boletoID, this.boletoForm.value)
					.subscribe((data) => {
						alert('Boleto ' + this.boletoID + ' Alterado com sucesso!');
						this._router.navigate(['/contas/boletos']);
					}, error => this.errorMessage = error)
			}
		}
		else {
			this._boletoService.saveBoleto(this.boletoForm.value)
				.subscribe((data) => {
					alert('Boleto ' + data.ID + 'Cadastrado com sucesso!');
					this._router.navigate(['/contas/boletos']);
				}, error => this.errorMessage = error)
		}
	}

	@ViewChild("IDFornecedor", { static: false}) fornField: ElementRef
	CarregarFornecedor() {
		this._fornecedorService.getFornecedor(this.boletoForm.get(["FornecedorID"]).value).subscribe(data => {
			let CNPJ = data.CNPJ;
			let nome = data.RazaoSocial;
			this.boletoForm.get(["Fornecedor", "CNPJ"]).patchValue(CNPJ);
			this.boletoForm.get(["Fornecedor", "RazaoSocial"]).patchValue(nome);
		}, error => {
			alert("Fornecedor não encontrado.");
			this.boletoForm.get(["FornecedorID"]).patchValue('');
			this.boletoForm.get(["Fornecedor", "CNPJ"]).patchValue('');
			this.boletoForm.get(["Fornecedor", "RazaoSocial"]).patchValue('');
			this.fornField.nativeElement.focus();
		})
	}
}
