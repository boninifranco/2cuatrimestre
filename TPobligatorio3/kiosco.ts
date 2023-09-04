import { Item } from "./item";

export class Kiosco {
    
    private listadoStock: Item [];
    private listadoVentas: Item [];

    //arrays que contienen el stock y las ventas realizadas
    public constructor (){
        this.listadoStock = [];
        this.listadoVentas = [];
     }
    //metodo agregar nuevo Producto
    public agregarItem(item: Item){
        this.listadoStock.push(item);
    }
    //metodo ver el listado de Stock
    public verStockDisponible() {
        console.log("Stock Disponible:");
        this.listadoStock.forEach(item => {
            console.log(`${item.getNombre()} - Precio: $${item.getCosto()} - Cantidad: ${item.getCantidad()}`);
        });
    }

    //metodo registrar una nueva venta
    public nuevaVenta(item: Item) {
        this.listadoVentas.push(item);
    }
    //metodo para ver ventas realizadas
    public historialDeVentas(){
        console.log("Listado de Ventas:");
        this.listadoVentas.forEach(item => {
            console.log(`${item.getNombre()} - Precio: $${item.getCosto()} - Cantidad: ${item.getCantidad()}`);
        });
    }
}