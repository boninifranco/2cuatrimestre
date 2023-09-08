"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, danio, energia) {
        this.nombre = nombre;
        this.vida = vida;
        this.danio = danio;
        this.energia = energia;
    }
    // Getters y Setters
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (nuevaVida) {
        this.vida = nuevaVida;
    };
    Personaje.prototype.getDanio = function () {
        return this.danio;
    };
    Personaje.prototype.setDanio = function (nuevodanio) {
        this.danio = nuevodanio;
    };
    Personaje.prototype.getEnergia = function () {
        return this.energia;
    };
    Personaje.prototype.setEnergia = function (nuevaEnergia) {
        this.energia = nuevaEnergia;
    };
    //metodos atacar daño y curar
    Personaje.prototype.atacar = function (objetivo) {
        var danioCausado = Math.round(this.danio);
        console.log("".concat(this.nombre, " ataca a ").concat(objetivo.nombre, " y hace ").concat(danioCausado, " de da\u00F1o."));
        objetivo.recibirDanio(danioCausado);
    };
    Personaje.prototype.recibirDanio = function (damage) {
        this.vida -= damage;
        if (this.vida <= 0) {
            console.log("".concat(this.nombre, " ha sido derrotado."));
        }
    };
    Personaje.prototype.curar = function () {
        var cantidad = Math.round(this.vida * 0.1);
        console.log("".concat(this.nombre, " se cura y recupera ").concat(cantidad, " de vida."));
        this.vida += cantidad;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
