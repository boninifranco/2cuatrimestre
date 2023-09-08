import { Personaje } from "./personaje";

export class Mago extends Personaje {
  constructor(nombre: string, vida: number, danio: number, energia: number) {
    super(nombre, vida, danio, energia);
  }

  public atacar(objetivo: Personaje) {
    console.log(`${this.getNombre()} lanza un hechizo a ${objetivo.getNombre()} a distancia y hace ${this.getDanio()} de daño.`);
    objetivo.recibirDanio(this.getDanio());
  }
}
