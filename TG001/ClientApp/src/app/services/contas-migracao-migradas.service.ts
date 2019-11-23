import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlAPI, httpOptions } from "../utils/app-constants";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Fornecedor } from "../Classes/Fornecedor";
import { ContasMigracaoMigradas } from "../Classes/Contas/Migracao/ContasMigracaoMigradas";

@Injectable()
export class ContasMigracaoMigradasService {
	myAppUrl: string = "";
	constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.myAppUrl = baseUrl;
	}

	getListaContasMigracaoMigradas() {
		return this._http.get<ContasMigracaoMigradas[]>(this.myAppUrl + UrlAPI.ContasMigracaoMigradas, httpOptions).pipe(catchError(this.handleError))
	}

	getContaMigracaoMigrada(id: number) {
		return this._http.get<ContasMigracaoMigradas>(this.myAppUrl + UrlAPI.ContasMigracaoMigradas + "/" + id, httpOptions).pipe(catchError(this.handleError))
	}

	saveContaMigracaoMigrada(contaMigracaoMigrada: ContasMigracaoMigradas) {
		return this._http.post<ContasMigracaoMigradas>(this.myAppUrl + UrlAPI.ContasMigracaoMigradas, JSON.stringify(contaMigracaoMigrada), httpOptions).pipe(catchError(this.handleError));
	}

	updateContaMigracaoMigrada(id: number, contaMigracaoMigrada: ContasMigracaoMigradas) {
		return this._http.put(this.myAppUrl + UrlAPI.ContasMigracaoMigradas + '/' + id, JSON.stringify(contaMigracaoMigrada), httpOptions).pipe(catchError(this.handleError));
	}

	deleteContaMigracaoMigrada(id: number) {
		return this._http.delete<ContasMigracaoMigradas>(this.myAppUrl + UrlAPI.ContasMigracaoMigradas + '/' + id, httpOptions).pipe(catchError(this.handleError));
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
