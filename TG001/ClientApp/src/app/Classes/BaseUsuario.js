"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUsuario = /** @class */ (function () {
    function BaseUsuario(SecurityStamp, PhoneNumberConfirmed, PhoneNumber, PasswordHash, NormalizedUserName, NormalizedEmail, LockoutEnd, LockoutEnabled, Id, EmailConfirmed, Email, ConcurrencyStamp, AccessFailedCount, TwoFactorEnabled, UserName) {
        this.SecurityStamp = SecurityStamp;
        this.PhoneNumberConfirmed = PhoneNumberConfirmed;
        this.PhoneNumber = PhoneNumber;
        this.PasswordHash = PasswordHash;
        this.NormalizedUserName = NormalizedUserName;
        this.NormalizedEmail = NormalizedEmail;
        this.LockoutEnd = LockoutEnd;
        this.LockoutEnabled = LockoutEnabled;
        this.Id = Id;
        this.EmailConfirmed = EmailConfirmed;
        this.Email = Email;
        this.ConcurrencyStamp = ConcurrencyStamp;
        this.AccessFailedCount = AccessFailedCount;
        this.TwoFactorEnabled = TwoFactorEnabled;
        this.UserName = UserName;
    }
    return BaseUsuario;
}());
exports.BaseUsuario = BaseUsuario;
//# sourceMappingURL=BaseUsuario.js.map