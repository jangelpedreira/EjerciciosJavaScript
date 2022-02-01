const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                 'Octubre', 'Noviembre', 'Diciembre'];

const months_7_chars = months
    .filter(month => month.length > 7)
    .map(month => month.toUpperCase());

const number_months_7_chars = months_7_chars.length;

console.log("Meses con más de 7 letras: " + months_7_chars);
console.log("Nº de meses con más de 7 letras: " + number_months_7_chars);








