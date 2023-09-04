"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(nombre, costo, cantidadDisponible) {
        this.nombre = nombre;
        this.costo = costo;
        this.cantidadDisponible = cantidadDisponible;
    }
    Item.prototype.getNombre = function () {
        return this.nombre;
    };
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    Item.prototype.getCantidad = function () {
        return this.cantidadDisponible;
    };
    Item.prototype.setCantidad = function (NuevaCantidad) {
        this.cantidadDisponible = NuevaCantidad;
    };
    return Item;
}());
exports.Item = Item;
