import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { OutraConta } from "../Classes/Contas/OutraConta";

@Injectable()
export class OutrasContasService {
	myAppUrl: string = "";
	apiUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
		this.apiUrl = this.myAppUrl + UrlAPI.OutrasContas;
	}

	getListaOutrasContas() {
		return this._http.get<OutraConta[]>(this.apiUrl, httpOptions).pipe(catchError(this.handleError))
	}

	getOutraConta(id: number) {
		return this._http.get<OutraConta>(this.apiUrl + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveOutraConta(outraConta: OutraConta) {
		return this._http.post<OutraConta>(this.apiUrl, JSON.stringify(outraConta), httpOptions).pipe(catchError(this.handleError));
	}

	updateOutraConta(id: number, outraConta: OutraConta) {
		return this._http.put(this.apiUrl + '/' + id, JSON.stringify(outraConta), httpOptions).pipe(catchError(this.handleError));
	}

	deleteOutraConta(id: number) {
		return this._http.delete<OutraConta>(this.apiUrl + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
