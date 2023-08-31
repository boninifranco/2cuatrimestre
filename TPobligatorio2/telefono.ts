export class telefono {

    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor(estaPrendido: boolean, bateriaActual: number) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }

    mandarMensaje(){
        console.log('Su mensaje ha sido enviado.')
    }
    hacerLlamada(){
        console.log('Llamada finalizada')
    }
    prenderApagar(): void{
        if (this.estaPrendido == true) {
            console.log('Telefono Encendido')
        } else {
            console.log('Telefono Apagado')
        }
    }
    protected verificarBateria(): number{
        return this.bateriaActual;
    }
    protected estaPrendidoCheck(): boolean {
        return this.estaPrendido;
    }
    protected reducirBateria(): void {
        this.bateriaActual -= 1;
    }

}