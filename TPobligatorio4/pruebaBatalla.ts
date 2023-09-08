import { Guerrero } from "./guerrero";
import { Mago } from "./mago";
import { Batalla } from "./batalla";

let guerrero = new Guerrero("Guerrero1", 10, 4, 6);
let mago = new Mago("Mago1", 10, 4, 6);
let batalla = new Batalla();

batalla.pelear(guerrero, mago);