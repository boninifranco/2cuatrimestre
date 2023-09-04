import { Kiosco } from "./kiosco";
import { Item } from "./item";

let KioscoDePrueba = new Kiosco();

KioscoDePrueba.agregarItem(new Item("Chicles", 60, 10));
KioscoDePrueba.agregarItem(new Item("Caramelos", 30, 50));
KioscoDePrueba.agregarItem(new Item("Chocolate", 100, 15));
KioscoDePrueba.verStockDisponible();

KioscoDePrueba.nuevaVenta(new Item("Caramelos",30,5));
KioscoDePrueba.nuevaVenta(new Item("Chicles",60,10));
console.log("---------");
KioscoDePrueba.historialDeVentas();
