import { Personaje } from "./personaje";

export class Guerrero extends Personaje {
  constructor(nombre: string, vida: number, danio: number, energia: number) {
    super(nombre, vida, danio, energia);
  }

  public atacar(objetivo: Personaje) {
    console.log(`${this.getNombre()} ataca a ${objetivo.getNombre()} con una espada y hace ${this.getDanio()} de daño.`);
    objetivo.recibirDanio(this.getDanio());
  }
}
