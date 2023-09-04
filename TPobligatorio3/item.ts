export class Item{

    private nombre: string;
    private costo: number;
    private cantidadDisponible: number;

    public constructor (nombre:string, costo:number, cantidadDisponible: number) {
        this.nombre = nombre;
        this.costo = costo;
        this.cantidadDisponible = cantidadDisponible;
    }
    
    public getNombre(): string{
        return this.nombre;
    }
    public getCosto(): number{
        return this.costo;
    }
    public getCantidad(): number{
        return this.cantidadDisponible;
    }
}