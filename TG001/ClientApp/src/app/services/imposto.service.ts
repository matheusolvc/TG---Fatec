import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Imposto } from "../Classes/Contas/Imposto";

@Injectable()
export class ImpostosService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaImpostos() {
		return this._http.get<Imposto[]>(this.myAppUrl + UrlAPI.Impostos, httpOptions).pipe(catchError(this.handleError))
	}

	getImposto(id: number) {
		return this._http.get<Imposto>(this.myAppUrl + UrlAPI.Impostos + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveImposto(imposto: Imposto) {
		return this._http.post<Imposto>(this.myAppUrl + UrlAPI.Impostos, JSON.stringify(imposto), httpOptions).pipe(catchError(this.handleError));
	}

	updateImposto(id: number, imposto: Imposto) {
		return this._http.put(this.myAppUrl + UrlAPI.Impostos + '/' + id, JSON.stringify(imposto), httpOptions).pipe(catchError(this.handleError));
	}

	deleteImposto(id: number) {
		return this._http.delete<Imposto>(this.myAppUrl + UrlAPI.Impostos + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
