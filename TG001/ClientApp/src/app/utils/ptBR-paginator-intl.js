"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var ptBRRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
        return "0 de " + length;
    }
    length = Math.max(length, 0);
    var startIndex = page * pageSize;
    var endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return startIndex + 1 + " - " + endIndex + " de " + length;
};
function getPTBRPaginatorIntl() {
    var paginatorIntl = new material_1.MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    paginatorIntl.nextPageLabel = 'Próxima Página';
    paginatorIntl.previousPageLabel = 'Página Anterior';
    paginatorIntl.getRangeLabel = ptBRRangeLabel;
    return paginatorIntl;
}
exports.getPTBRPaginatorIntl = getPTBRPaginatorIntl;
//# sourceMappingURL=ptBR-paginator-intl.js.map