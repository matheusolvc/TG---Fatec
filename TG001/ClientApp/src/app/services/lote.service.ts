import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Lote } from "../Classes/Lote";

@Injectable()
export class LoteService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaLotes() {
		return this._http.get<Lote[]>(this.myAppUrl + UrlAPI.Lotes, httpOptions).pipe(catchError(this.handleError))
	}

	getLote(id: number) {
		return this._http.get<Lote>(this.myAppUrl + UrlAPI.Lotes + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveLote(lote: Lote) {
		return this._http.post<Lote>(this.myAppUrl + UrlAPI.Lotes, JSON.stringify(lote), httpOptions).pipe(catchError(this.handleError));
	}

	updateLote(id: number, lote: Lote) {
		return this._http.put(this.myAppUrl + UrlAPI.Lotes + '/' + id, JSON.stringify(lote), httpOptions).pipe(catchError(this.handleError));
	}

	deleteLote(id: number) {
		return this._http.delete<Lote>(this.myAppUrl + UrlAPI.Lotes + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
