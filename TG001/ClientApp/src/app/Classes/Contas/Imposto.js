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
var Imposto = /** @class */ (function (_super) {
    __extends(Imposto, _super);
    function Imposto(Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, Usuario, LinhaDigitavel, CNPJMatriz, ID, CodigoImposto, PeriodoApuracao) {
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
        _this.LinhaDigitavel = LinhaDigitavel;
        _this.CNPJMatriz = CNPJMatriz;
        _this.ID = ID;
        _this.CodigoImposto = CodigoImposto;
        _this.PeriodoApuracao = PeriodoApuracao;
        return _this;
        //super();
    }
    return Imposto;
}(Conta_1.Conta));
exports.Imposto = Imposto;
//# sourceMappingURL=Imposto.js.map