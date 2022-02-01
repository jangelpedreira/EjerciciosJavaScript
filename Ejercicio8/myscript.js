let frase = prompt("Escribe una frase: ");
var letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var letrasMinusculas = "abcdefghyjklmnñopqrstuvwxyz";

function mayusculasMinusculas(frase) {    
    var numeroLetras = frase.length;
    var tieneLetrasMayusculas = false;
    var tieneLetrasMinusculas = false;

    for (var i=0;i<numeroLetras;i++) {
        if (letrasMayusculas.indexOf(frase[i])>=0)
            tieneLetrasMayusculas = true;
        else if (letrasMinusculas.indexOf(frase[i])>=0)
            tieneLetrasMinusculas = true;
    }
    if (tieneLetrasMayusculas && !tieneLetrasMinusculas)
        alert("La frase " + frase + " está escrita en mayúsculas");
    else if (!tieneLetrasMayusculas && tieneLetrasMinusculas)
        alert("La frase " + frase + " está escrita en minúsculas");
    else if (tieneLetrasMayusculas && tieneLetrasMinusculas)
        alert("La frase " + frase + " está escrita en mayúsculas y minúsculas");
}

mayusculasMinusculas(frase);






