class Factura {
    constructor (cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "Efectivo"
        }
    }
    
    calculoTotal() {
        for (var i=0;i<this.elementos.length;i++) {
            this.informacion.baseImponible += elementos[i].cantidad * elementos[i].precio;    
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
    }

    mostrarTotal() {
        this.calculoTotal();
        alert("Total factura: " + this.informacion.total);
    }
}

class Cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class Elemento {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const cliente_1 = new Cliente ("Pedro Fernández", "Calle Galicia, 35, 2ºB, Oviedo", "657 89 23 32", "11564723H")
const elemento_1 = new Elemento("Elemento 1", 12, 5);
const elemento_2 = new Elemento("Elemento 2", 5, 20);
const elemento_3 = new Elemento("Elemento 3", 10, 12);
const elementos = [];
elementos.push(elemento_1);
elementos.push(elemento_2);
elementos.push(elemento_3);

const factura = new Factura(cliente_1, elementos);
factura.mostrarTotal();

