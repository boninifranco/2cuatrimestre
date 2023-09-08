"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batalla = void 0;
var Batalla = /** @class */ (function () {
    function Batalla() {
    }
    Batalla.prototype.pelear = function (personaje1, personaje2) {
        var turno = 1;
        while (personaje1.getVida() > 0 && personaje2.getVida() > 0 && personaje1.getEnergia() > 0 && personaje2.getEnergia() > 0) {
            console.log("Turno ".concat(turno));
            console.log("".concat(personaje1.getNombre(), ": Vida ").concat(personaje1.getVida(), ", Energ\u00EDa ").concat(personaje1.getEnergia(), " || ").concat(personaje2.getNombre(), ": Vida ").concat(personaje2.getVida(), ", Energ\u00EDa ").concat(personaje2.getEnergia()));
            if (turno % 2 === 1) {
                // P1 toma una decisión aleatoria
                if (Math.random() <= 0.5) {
                    // Curarse
                    personaje1.curar();
                }
                else {
                    // Atacar a P2
                    personaje1.atacar(personaje2);
                }
            }
            else {
                // P2 toma una decisión aleatoria
                if (Math.random() <= 0.5) {
                    // Curarse
                    personaje2.curar();
                }
                else {
                    // Atacar a P1
                    personaje2.atacar(personaje1);
                }
            }
            turno++;
        }
        // determinar el ganador
        if (personaje1.getVida() <= 0 && personaje2.getVida() <= 0) {
            console.log("La batalla terminó en empate.");
        }
        else if (personaje1.getVida() <= 0) {
            console.log("".concat(personaje2.getNombre(), " es el ganador."));
        }
        else {
            console.log("".concat(personaje1.getNombre(), " es el ganador."));
        }
    };
    return Batalla;
}());
exports.Batalla = Batalla;
