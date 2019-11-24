import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { RetornoLote } from "../Classes/RetornoLote";

@Injectable()
export class RetornoLoteService {
	myAppUrl: string = "";
	apiUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
		this.apiUrl = this.myAppUrl + UrlAPI.RetornoLotes;
	}

	getListaFornecedores() {
		return this._http.get<RetornoLote[]>(this.apiUrl, httpOptions).pipe(catchError(this.handleError))
	}

	getFornecedor(id: number) {
		return this._http.get<RetornoLote>(this.apiUrl + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveFornecedor(retornoLote: RetornoLote) {
		return this._http.post<RetornoLote>(this.apiUrl, JSON.stringify(retornoLote), httpOptions).pipe(catchError(this.handleError));
	}

	updateFornecedor(id: number, retornoLote: RetornoLote) {
		return this._http.put(this.apiUrl + '/' + id, JSON.stringify(retornoLote), httpOptions).pipe(catchError(this.handleError));
	}

	deleteFornecedor(id: number) {
		return this._http.delete<RetornoLote>(this.apiUrl + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
		console.error(error.error);
		
		return throwError(
			'Algo aconteceu. Tente novamente mais tarde');
	};
}
