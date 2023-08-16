"use strict";
class Astronauta {
    constructor(id, nombre, _record, recompensas) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensas = recompensas;
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//via constructor
const astro1 = new Astronauta(1, "Julian", "Luna", "Nada");
// Via setter
astro1.record = "artemis";
if (astro1.record === "artemis") {
    astro1.recompensas = "5 millones";
    console.log(`Record via Setter de julian: ${astro1.record} su recompensa es de: ${astro1.recompensas}`);
}
else {
    console.log(`Record via Setter de julian: ${astro1.record}, gano: ${astro1.recompensas}`);
}
