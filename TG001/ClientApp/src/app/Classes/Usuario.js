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
var BaseUsuario_1 = require("./BaseUsuario");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(SecurityStamp, PhoneNumberConfirmed, PhoneNumber, PasswordHash, NormalizedUserName, NormalizedEmail, LockoutEnd, LockoutEnabled, Id, EmailConfirmed, Email, ConcurrencyStamp, AccessFailedCount, TwoFactorEnabled, UserName, Matricula) {
        var _this = _super.call(this, SecurityStamp, PhoneNumberConfirmed, PhoneNumber, PasswordHash, NormalizedUserName, NormalizedEmail, LockoutEnd, LockoutEnabled, Id, EmailConfirmed, Email, ConcurrencyStamp, AccessFailedCount, TwoFactorEnabled, UserName) || this;
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
        return _this;
    }
    return Usuario;
}(BaseUsuario_1.BaseUsuario));
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map