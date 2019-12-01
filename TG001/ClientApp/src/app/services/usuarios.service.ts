import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Usuario } from "../Classes/Usuario";

@Injectable()
export class UsuarioService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl + UrlAPI.Usuarios;
	}

	getListaUsuario() {
		return this._http.get<Usuario[]>(this.myAppUrl, httpOptions).pipe(catchError(this.handleError))
	}

	getUsuario(id: string) {
		return this._http.get<string>(this.myAppUrl + "/" + id, httpOptions).pipe(catchError(this.handleError));
	}

	//saveBoleto(boleto: Boleto) {
	//	return this._http.post<Boleto>(this.myAppUrl + UrlAPI.Boletos, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	//}

	//updateBoleto(id: number, boleto: Boleto) {
	//	return this._http.put(this.myAppUrl + UrlAPI.Boletos + '/' + id, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	//}

	//deleteBoleto(id: number) {
	//	return this._http.delete<Boleto>(this.myAppUrl + UrlAPI.Boletos + '/' + id, httpOptions).pipe(catchError(this.handleError));
	//}

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
		console.error(error.error);

		return throwError(
			'Algo aconteceu. Tente novamente mais tarde');
	};
}
