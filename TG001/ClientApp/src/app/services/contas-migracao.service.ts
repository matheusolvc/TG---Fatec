import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { ContasMigracao } from "../Classes/Contas/Migracao/ContasMigracao";

@Injectable()
export class ContasMigracaoService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaContasMigracao() {
		return this._http.get<ContasMigracao[]>(this.myAppUrl + UrlAPI.ContasMigracao, httpOptions).pipe(catchError(this.handleError))
	}

	getContaMigracao(id: number) {
		return this._http.get<ContasMigracao>(this.myAppUrl + UrlAPI.ContasMigracao + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveContaMigracao(contaMigracao: ContasMigracao) {
		return this._http.post<ContasMigracao>(this.myAppUrl + UrlAPI.ContasMigracao, JSON.stringify(contaMigracao), httpOptions).pipe(catchError(this.handleError));
	}

	updateContaMigracao(id: number, boleto: ContasMigracao) {
		return this._http.put(this.myAppUrl + UrlAPI.ContasMigracao+ '/' + id, JSON.stringify(boleto), httpOptions).pipe(catchError(this.handleError));
	}

	deleteContaMigracao(id: number) {
		return this._http.delete<ContasMigracao>(this.myAppUrl + UrlAPI.ContasMigracao + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
