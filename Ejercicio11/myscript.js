const times = [60, 75, 79, 80, 55, 59];

var media = 0;
times.map(function(time) {
    media+=time;
});

media = media/times.length;

console.log("Media: " + media);








