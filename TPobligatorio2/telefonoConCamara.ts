import { telefono } from "./telefono";
import { telefonoConRadio } from "./telefonoConRadio";


export class telefonoConCamara extends telefono {

    private flashPrendido;

    constructor(estaPrendido: boolean, bateriaActual: number,flashPrendido: boolean) {
        super(estaPrendido, bateriaActual,);
    }

    sacarFoto(): void{
        if (this.estaPrendidoCheck()) {
            if (this.verificarBateria() > 0) { //si la bateria es mayor a 0 saca la foto y reduce la bateria 1
                console.log('Foto guardada...');
                this.reducirBateria();
                console.log('Batería actual:', this.verificarBateria());
            } else { //si no hay bateria envia este log
                console.log('No se puede tomar la foto porque la batería está agotada.');
            }
        } else { //si el telefono esta apagado envia este log
            console.log('No se puede tomar la foto porque el teléfono está apagado.');
        }
    }
    prenderFlash(): void{
        if (this.flashPrendido() == true) {
            console.log('Flash Encendido');            
        } else {
            console.log('Flash Apagado');       
        }
    }
}