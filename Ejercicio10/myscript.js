const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = numbers.filter(function(number){
    if (number%2==0)
        return number;
});
const impares = numbers.filter(function(number){
    if (number%2!=0)
        return number;
});

console.log("Pares = " + pares);
console.log("Impares = " + impares);








