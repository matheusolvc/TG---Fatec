import { HttpHeaders } from "@angular/common/http";

const ApiBaseUrl = 'api/';


let caminhosAPI: CaminhosAPI = {
	Boletos: ApiBaseUrl + 'Boletos',
	Impostos: ApiBaseUrl + 'Impostos',
	OutrasContas: ApiBaseUrl + 'OutrasContas',
	Fornecedores: ApiBaseUrl + 'Fornecedores',
	ContasMigracao: ApiBaseUrl + 'ContasMigracao',
	ContasMigracaoMigradas: ApiBaseUrl + 'ContasMigracaoMigradas',
	Usuarios: ApiBaseUrl + 'Usuarios',
	Colaboradores: ApiBaseUrl + 'Colaboradores',
	Lotes: ApiBaseUrl + 'Lotes',
	RetornoLotes: ApiBaseUrl + 'RetornoLotes',
	Reembolsos: ApiBaseUrl + 'Reembolsos',
	Renegociacoes: ApiBaseUrl + 'Renegociacoes'
};

export const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	})
};

interface CaminhosAPI {
	readonly Boletos: string;
	readonly Impostos: string;
	readonly OutrasContas: string;
	readonly Fornecedores: string;
	readonly ContasMigracao: string;
	readonly ContasMigracaoMigradas: string;
	readonly Usuarios: string;
	readonly Colaboradores: string;
	readonly Lotes: string;
	readonly RetornoLotes: string;
	readonly Reembolsos: string;
	readonly Renegociacoes: string;
}

export const UrlAPI: CaminhosAPI = caminhosAPI;
