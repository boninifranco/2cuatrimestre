import { telefono } from "./telefono";
import { telefonoConCamara } from "./telefonoConCamara";
import { telefonoConRadio } from "./telefonoConRadio";

let telefonoPrueba = new telefono (false, 99);
let telefonoPrueba2 = new telefono (true, 99);
let telefonoPrueba3 = new telefonoConCamara (true, 99,true);
let telefonoPrueba4 = new telefonoConRadio (true, 99,200.5);


console.log(telefonoPrueba.prenderApagar());
console.log(telefonoPrueba2.prenderApagar());
console.log(telefonoPrueba3.sacarFoto());
console.log(telefonoPrueba4.aumentarFrecuencia10());
console.log(telefonoPrueba4);
