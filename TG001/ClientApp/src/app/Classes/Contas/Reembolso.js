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
var Reembolso = /** @class */ (function (_super) {
    __extends(Reembolso, _super);
    function Reembolso(ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, NumeroDocumento, Serie, UsuarioID, Usuario, DataRecibo, Descricao, ColaboradorID, Colaborador) {
        var _this = _super.call(this, ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, NumeroDocumento, Serie, UsuarioID, Usuario) || this;
        _this.ID = ID;
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
        _this.NumeroDocumento = NumeroDocumento;
        _this.Serie = Serie;
        _this.UsuarioID = UsuarioID;
        _this.Usuario = Usuario;
        _this.DataRecibo = DataRecibo;
        _this.Descricao = Descricao;
        _this.ColaboradorID = ColaboradorID;
        _this.Colaborador = Colaborador;
        return _this;
    }
    return Reembolso;
}(Conta_1.Conta));
exports.Reembolso = Reembolso;
//# sourceMappingURL=Reembolso.js.map