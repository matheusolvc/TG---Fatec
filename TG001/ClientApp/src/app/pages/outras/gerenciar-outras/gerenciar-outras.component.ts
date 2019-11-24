import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OutraConta } from '../../../Classes/Contas/OutraConta';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OutrasContasService } from '../../../services/outras-contas.service';
import { FornecedorService } from '../../../services/fornecedor.service

@Component({
  selector: 'app-gerenciar-outras',
  templateUrl: './gerenciar-outras.component.html',
  styleUrls: ['./gerenciar-outras.component.css']
})
export class GerenciarOutrasComponent implements OnInit {
	outraContaForm: FormGroup;
	title: string = "Cadastro";
	outraContaID: number;
	errorMessage: any;
	boleto: OutraConta;

	constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
		private _outrasContasService: OutrasContasService, private _fornecedorService: FornecedorService, private _router: Router) {
		if (this._avRoute.snapshot.params["id"]) {
			this.outraContaID = this._avRoute.snapshot.params["id"];
		}

		this.outraContaForm = this._fb.group(
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
				DataCriacao: [''],
				DataAlteracao: [''],
				DataPagamento: [''],
				NumeroDocumento: ['', Validators.required],
				Serie: ['', Validators.required],
				Usuario: [''],
			});
	}
	Resetar() {
		this.ngOnInit();
	}

	ngOnInit() {
		if (this.outraContaID > 0) {
			this.title = "Alteração";
			this._outrasContasService.getOutraConta(this.outraContaID).subscribe((data: OutraConta) => { this.outraContaForm.setValue(data) }, error =>
			{
				console.log(error);
				alert('Conta não encontrada!');
				this._router.navigate(['/contas/outras']);
			});
			console.log(this.outraContaForm);
		}
	}
	Voltar() {
		this._router.navigate(['/contas/outras']);
	}
	Confirmar() {
		if (!this.outraContaForm.valid) {
			return;
		}
		if (this.outraContaID > 0) {
			if (confirm('Confirma a Alteração do Imposto' + this.outraContaID + '?')) {
				this._outrasContasService.updateOutraConta(this.outraContaID, this.outraContaForm.value)
					.subscribe((data) => {
						alert('Imposto ' + this.outraContaID + ' Alterado com sucesso!');
						this._router.navigate(['/contas/outras']);
					}, error => this.errorMessage = error)
			}
		}
		else {
			this._outrasContasService.saveOutraConta(this.outraContaForm.value)
				.subscribe((data) => {
					alert('Imposto ' + data.ID + 'Cadastrado com sucesso!');
					this._router.navigate(['/contas/outras']);
				}, error => this.errorMessage = error)
		}
	}

	@ViewChild("IDFornecedor", { static: false }) fornField: ElementRef
	CarregarFornecedor() {
		this._fornecedorService.getFornecedor(this.outraContaForm.get(["FornecedorID"]).value).subscribe(data => {
			let CNPJ = data.CNPJ;
			let nome = data.RazaoSocial;
			this.outraContaForm.get(["Fornecedor", "CNPJ"]).patchValue(CNPJ);
			this.outraContaForm.get(["Fornecedor", "RazaoSocial"]).patchValue(nome);
		}, error => {
			alert("Fornecedor não encontrado.");
			this.outraContaForm.get(["FornecedorID"]).patchValue('');
			this.outraContaForm.get(["Fornecedor", "CNPJ"]).patchValue('');
			this.outraContaForm.get(["Fornecedor", "RazaoSocial"]).patchValue('');
			this.fornField.nativeElement.focus();
		})
	}
}
