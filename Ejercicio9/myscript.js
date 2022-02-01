const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

const reversed = topics.reverse();
const uppercased = reversed.map(function(topic) {
    return topic.toUpperCase();
});

console.log("Resultado: " + uppercased);







