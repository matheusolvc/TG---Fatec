"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var ApiBaseUrl = 'api/';
var caminhosAPI = {
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
exports.httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
    })
};
exports.UrlAPI = caminhosAPI;
//# sourceMappingURL=app-constants.js.map