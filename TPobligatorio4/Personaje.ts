export class Personaje {
        private nombre: string;
        private vida: number;
        private danio: number;
        private energia: number;
      
        constructor(nombre: string, vida: number, danio: number, energia: number) {
          this.nombre = nombre;
          this.vida = vida;
          this.danio = danio;
          this.energia = energia;
        }
      
        // Getters y Setters
        public getNombre(): string {
          return this.nombre;
        }
        public setNombre(nuevoNombre: string) {
          this.nombre = nuevoNombre;
        }
        public getVida(): number {
          return this.vida;
        }
        public setVida(nuevaVida: number) {
          this.vida = nuevaVida;
        }
        public getDanio(): number {
          return this.danio;
        }
        public setDanio(nuevodanio: number) {
          this.danio = nuevodanio;
        }
        public getEnergia(): number {
          return this.energia;
        }
        public setEnergia(nuevaEnergia: number) {
          this.energia = nuevaEnergia;
        }
        
        //metodos atacar daño y curar
        public atacar(objetivo: Personaje) {
            let danioCausado = Math.round(this.danio);
            console.log(`${this.nombre} ataca a ${objetivo.nombre} y hace ${danioCausado} de daño.`);
            objetivo.recibirDanio(danioCausado);
        }
      
        public recibirDanio(damage: number) {
          this.vida -= damage;
          if (this.vida <= 0) {
            console.log(`${this.nombre} ha sido derrotado.`);
          }
        }
      
        public curar() {
            let cantidad = Math.round(this.vida * 0.1);
            console.log(`${this.nombre} se cura y recupera ${cantidad} de vida.`);
            this.vida += cantidad;
        }
      }
      