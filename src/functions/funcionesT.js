"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesForOf = exports.clientesForIn = exports.clientesForEach = void 0;
var clientesT_1 = require("../plugins/clientesT");
function clientesForEach() {
    clientesT_1.clientes.forEach(function (datoCliente) {
        console.table(datoCliente);
    });
}
exports.clientesForEach = clientesForEach;
function clientesForIn() {
    for (var datoCliente in clientesT_1.clientes) {
        if (clientesT_1.clientes.hasOwnProperty(datoCliente)) {
            console.table(clientesT_1.clientes[datoCliente]);
        }
    }
}
exports.clientesForIn = clientesForIn;
function clientesForOf() {
    for (var _i = 0, clientes_1 = clientesT_1.clientes; _i < clientes_1.length; _i++) {
        var cliente = clientes_1[_i];
        console.table(cliente);
    }
}
exports.clientesForOf = clientesForOf;
