 const Cuadrado = {
    constructor(lado) {
        this.lado = lado;
    },
    area: function() {
        return (this.lado*this.lado);
    },
    perimetro: function() {
        return (this.lado+this.lado+this.lado+this.lado);
    }

}

const cuadradoPequeno = new Cuadrado(2);
console.log("Cuadrado de " + cuadradoPequeno.lado + " cm de lado => Area: " + cuadradoPequeno.area() + " cm2 - Perímetro: " + cuadradoPequeno.perimetro() + " cm");

const cuadradoMediano = new Cuadrado(5);
console.log("Cuadrado de " + cuadradoMediano.lado + " cm de lado => Area: " + cuadradoMediano.area() + " cm2 - Perímetro: " + cuadradoMediano.perimetro() + " cm");

const cuadradoGrande = new Cuadrado(10);
console.log("Cuadrado de " + cuadradoGrande.lado + " cm de lado => Area: " + cuadradoGrande.area() + " cm2 - Perímetro: " + cuadradoGrande.perimetro() + " cm"); 








