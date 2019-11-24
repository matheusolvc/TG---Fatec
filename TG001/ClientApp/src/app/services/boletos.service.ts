import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Boleto } from "../Classes/Contas/Boleto";
import { Observable, throwError } from "rxjs";

@Injectable()
export class BoletoService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaBoletos() {
		return this._http.get<Boleto[]>(this.myAppUrl + UrlAPI.Boletos, httpOptions).pipe(catchError(this.handleError))
	}

	getBoleto(id: number) {
		return this._http.get<Boleto>(this.myAppUrl + UrlAPI.Boletos + "/" + id, httpOptions).pipe(catchError(this.handleError))
		//.catch(this.errorHandler);
	}

	saveBoleto(boleto: Boleto) {
		return this._http.post<Boleto>(this.myAppUrl + UrlAPI.Boletos, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	}

	updateBoleto(id: number, boleto: Boleto) {
		return this._http.put(this.myAppUrl + UrlAPI.Boletos + '/' + id, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	}

	deleteBoleto(id: number) {
		return this._http.delete<Boleto>(this.myAppUrl + UrlAPI.Boletos + '/' + id, httpOptions).pipe(catchError(this.handleError));
	}

	errorHandler(error: Response) {
		console.log(error);
		alert(error);
		return Observable.throw(error);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			
			console.error('An error occurred:', error.error.message);
		} else {
			
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		console.error(error.error);
		
		return throwError(
			'Something bad happened; please try again later.');
	};
}
