"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Conta_1 = require("./Conta");
var Boleto = /** @class */ (function (_super) {
    __extends(Boleto, _super);
    function Boleto(
    //Conta
    Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, Usuario, 
    //Boleto
    ID, IDFornecedor, CNPJ, RazaoSocial, NumDocumento, LinhaDigitavel) {
        var _this = _super.call(this) || this;
        _this.Status = Status;
        _this.DataCriacao = DataCriacao;
        _this.DataAlteracao = DataAlteracao;
        _this.DataEmissao = DataEmissao;
        _this.DataVencimento = DataVencimento;
        _this.DataPagamento = DataPagamento;
        _this.TipoConta = TipoConta;
        _this.ValorDocumento = ValorDocumento;
        _this.Multa = Multa;
        _this.Juros = Juros;
        _this.ValorAPagar = ValorAPagar;
        _this.Usuario = Usuario;
        _this.ID = ID;
        _this.IDFornecedor = IDFornecedor;
        _this.CNPJ = CNPJ;
        _this.RazaoSocial = RazaoSocial;
        _this.NumDocumento = NumDocumento;
        _this.LinhaDigitavel = LinhaDigitavel;
        return _this;
    }
    return Boleto;
}(Conta_1.Conta));
exports.Boleto = Boleto;
//# sourceMappingURL=Boleto.js.map