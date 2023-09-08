import { Personaje } from "./personaje";

export class Batalla {
  constructor() {}

  public pelear(personaje1: Personaje, personaje2: Personaje) {
    let turno = 1;

    while (personaje1.getVida() > 0 && personaje2.getVida() > 0 && personaje1.getEnergia() > 0 && personaje2.getEnergia() > 0) {
      console.log(`Turno ${turno}`);
      console.log(`${personaje1.getNombre()}: Vida ${personaje1.getVida()}, Energía ${personaje1.getEnergia()} || ${personaje2.getNombre()}: Vida ${personaje2.getVida()}, Energía ${personaje2.getEnergia()}`);

      if (turno % 2 === 1) {
        // P1 toma una decisión aleatoria
        if (Math.random() <= 0.5) {
          // Curarse
          personaje1.curar();
        } else {
          // Atacar a P2
          personaje1.atacar(personaje2);
        }
      } else {
        // P2 toma una decisión aleatoria
        if (Math.random() <= 0.5) {
          // Curarse
          personaje2.curar();
        } else {
          // Atacar a P1
          personaje2.atacar(personaje1);
        }
      }
      turno++;
    }

    // determinar el ganador
    if (personaje1.getVida() <= 0 && personaje2.getVida() <= 0) {
      console.log("La batalla terminó en empate.");
    } else if (personaje1.getVida() <= 0) {
      console.log(`${personaje2.getNombre()} es el ganador.`);
    } else {
      console.log(`${personaje1.getNombre()} es el ganador.`);
    }
  }
}
