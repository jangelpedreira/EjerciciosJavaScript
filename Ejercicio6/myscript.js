const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

let suma = 0;
for (let i=0;i<9;i++) {
    suma += notas[i];
}
console.log("La suma es: " + suma);

suma = 0;
for (let nota of notas) {
    suma += nota;
}
console.log("La suma es: " + suma);


