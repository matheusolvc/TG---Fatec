import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Fornecedor } from "../Classes/Fornecedor";

@Injectable()
export class FornecedorService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaFornecedores() {
		return this._http.get<Fornecedor[]>(this.myAppUrl + UrlAPI.Fornecedores, httpOptions).pipe(catchError(this.handleError))
	}

	getFornecedor(id: number) {
		return this._http.get<Fornecedor>(this.myAppUrl + UrlAPI.Fornecedores + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveFornecedor(fornecedor: Fornecedor) {
		return this._http.post<Fornecedor>(this.myAppUrl + UrlAPI.Fornecedores, JSON.stringify(fornecedor), httpOptions).pipe(catchError(this.handleError));
	}

	updateFornecedor(id: number, boleto: Fornecedor) {
		return this._http.put(this.myAppUrl + UrlAPI.Fornecedores + '/' + id, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	}

	deleteFornecedor(id: number) {
		return this._http.delete<Fornecedor>(this.myAppUrl + UrlAPI.Fornecedores + '/' + id, httpOptions).pipe(catchError(this.handleError));
	}

	errorHandler(error: Response) {
		console.log(error);
		alert(error);
		return Observable.throw(error);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('Um erro ocorreu:', error.error.message);
		} else {
			console.error(
				`Backend retornou o código ${error.status}, ` +
				`o corpo era: ${error.error}`);
		}
		alert(error.error);
		
		return throwError(
			'Algo aconteceu. Tente novamente mais tarde');
	};
}
