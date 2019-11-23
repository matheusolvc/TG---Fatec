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
var Usuario_1 = require("./Usuario");
var Colaborador = /** @class */ (function (_super) {
    __extends(Colaborador, _super);
    function Colaborador(SecurityStamp, PhoneNumberConfirmed, PhoneNumber, PasswordHash, NormalizedUserName, NormalizedEmail, LockoutEnd, LockoutEnabled, Id, EmailConfirmed, Email, ConcurrencyStamp, AccessFailedCount, TwoFactorEnabled, UserName, Matricula, CPF, Nome, CodBanco, Agencia, Conta) {
        var _this = _super.call(this, SecurityStamp, PhoneNumberConfirmed, PhoneNumber, PasswordHash, NormalizedUserName, NormalizedEmail, LockoutEnd, LockoutEnabled, Id, EmailConfirmed, Email, ConcurrencyStamp, AccessFailedCount, TwoFactorEnabled, UserName, Matricula) || this;
        _this.SecurityStamp = SecurityStamp;
        _this.PhoneNumberConfirmed = PhoneNumberConfirmed;
        _this.PhoneNumber = PhoneNumber;
        _this.PasswordHash = PasswordHash;
        _this.NormalizedUserName = NormalizedUserName;
        _this.NormalizedEmail = NormalizedEmail;
        _this.LockoutEnd = LockoutEnd;
        _this.LockoutEnabled = LockoutEnabled;
        _this.Id = Id;
        _this.EmailConfirmed = EmailConfirmed;
        _this.Email = Email;
        _this.ConcurrencyStamp = ConcurrencyStamp;
        _this.AccessFailedCount = AccessFailedCount;
        _this.TwoFactorEnabled = TwoFactorEnabled;
        _this.UserName = UserName;
        _this.Matricula = Matricula;
        _this.CPF = CPF;
        _this.Nome = Nome;
        _this.CodBanco = CodBanco;
        _this.Agencia = Agencia;
        _this.Conta = Conta;
        return _this;
    }
    return Colaborador;
}(Usuario_1.Usuario));
exports.Colaborador = Colaborador;
//# sourceMappingURL=Colaborador.js.map