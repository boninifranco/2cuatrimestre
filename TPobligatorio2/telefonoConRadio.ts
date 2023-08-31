import { telefono } from "./telefono";

export class telefonoConRadio extends telefono {

    private frecuenciaActual: number;

    constructor(estaPrendido: boolean, bateriaActual: number, frecuenciaActual: number) {
        super(estaPrendido, bateriaActual);
        this.frecuenciaActual = frecuenciaActual;
    }

    verFrecuenciaActual(): string {
        return `La frecuencia actual es: ${this.frecuenciaActual}`;
    }
    aumentarFrecuencia10(): void{
        this.frecuenciaActual += 10;
    }
    reducirFrecuencia10(): void{
        this.frecuenciaActual -= 10;
    }
}