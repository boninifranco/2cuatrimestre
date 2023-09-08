"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var batalla_1 = require("./batalla");
var guerrero = new guerrero_1.Guerrero("Guerrero1", 20, 10, 6);
var mago = new mago_1.Mago("Mago1", 20, 10, 6);
var batalla = new batalla_1.Batalla();
batalla.pelear(guerrero, mago);
