const arrayLetrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 
                        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Indique el número de DNI sin letra: ");
let resto;
let letraDni;

if (dni<0 || dni>99999999) {
    alert ("El número de DNI introducido no es válido");
}
else {
    resto = dni%23;
    letraDni = arrayLetrasDni[resto];
    alert ("La letra del DNI " + dni + " es la " + letraDni);
}
