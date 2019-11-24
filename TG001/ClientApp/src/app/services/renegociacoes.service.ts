import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Renegociacao } from "../Classes/Contas/Renegociacao";

@Injectable()
export class RenegociacoesService {
	myAppUrl: string = "";
	apiUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
		this.apiUrl = this.myAppUrl + UrlAPI.Renegociacoes;
	}

	getListaRenegociacoes() {
		return this._http.get<Renegociacao[]>(this.apiUrl, httpOptions).pipe(catchError(this.handleError))
	}

	getRenegociacao(id: number) {
		return this._http.get<Renegociacao>(this.apiUrl + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveRenegociacao(renegociacao: Renegociacao) {
		return this._http.post<Renegociacao>(this.apiUrl, JSON.stringify(renegociacao), httpOptions).pipe(catchError(this.handleError));
	}

	updateRenegociacao(id: number, renegociacao: Renegociacao) {
		return this._http.put(this.apiUrl + '/' + id, JSON.stringify(renegociacao), httpOptions).pipe(catchError(this.handleError));
	}

	deleteRenegociacao(id: number) {
		return this._http.delete<Renegociacao>(this.apiUrl + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
