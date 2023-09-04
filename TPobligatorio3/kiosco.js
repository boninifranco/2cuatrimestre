"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kiosco = void 0;
var Kiosco = /** @class */ (function () {
    //arrays que contienen el stock y las ventas realizadas
    function Kiosco() {
        this.listadoStock = [];
        this.listadoVentas = [];
    }
    //metodo agregar nuevo Producto
    Kiosco.prototype.agregarItem = function (item) {
        this.listadoStock.push(item);
    };
    //metodo ver el listado de Stock
    Kiosco.prototype.verStockDisponible = function () {
        console.log("Stock Disponible:");
        this.listadoStock.forEach(function (item) {
            console.log("".concat(item.getNombre(), " - Precio: $").concat(item.getCosto(), " - Cantidad: ").concat(item.getCantidad()));
        });
    };
    //metodo registrar una nueva venta
    Kiosco.prototype.nuevaVenta = function (item) {
        this.listadoVentas.push(item);
    };
    //metodo para ver ventas realizadas
    Kiosco.prototype.historialDeVentas = function () {
        console.log("Listado de Ventas:");
        this.listadoVentas.forEach(function (item) {
            console.log("".concat(item.getNombre(), " - Precio: $").concat(item.getCosto(), " - Cantidad: ").concat(item.getCantidad()));
        });
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
