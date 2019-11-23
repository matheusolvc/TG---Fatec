import { Injectable, Inject, Type } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Reembolso } from "../Classes/Contas/Reembolso";

@Injectable()
export class ReembolsoService {
	myAppUrl: string = "";
	apiUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
		this.apiUrl = this.myAppUrl + UrlAPI.Reembolsos;
	}

	getListaReembolsos() {
		return this._http.get<Reembolso>(this.apiUrl, httpOptions).pipe(catchError(this.handleError))
	}

	getReembolso(id: number) {
		return this._http.get<Reembolso>(this.apiUrl + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveReembolso(reembolso: Reembolso) {
		return this._http.post<Reembolso>(this.apiUrl, JSON.stringify(reembolso), httpOptions).pipe(catchError(this.handleError));
	}

	updateReembolso(id: number, reembolso: Reembolso) {
		return this._http.put(this.apiUrl + '/' + id, JSON.stringify(reembolso), httpOptions).pipe(catchError(this.handleError));
	}

	deleteReembolso(id: number) {
		return this._http.delete<Reembolso>(this.apiUrl + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
				`body: ${error.error}`);
		}
		alert(error.error);
		
		return throwError(
			'Algo aconteceu. Tente novamente mais tarde');
	};
}
