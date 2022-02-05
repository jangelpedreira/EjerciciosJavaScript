const enlacesPagina  = document.getElementsByTagName('a');
const numEnlacesPagina = enlacesPagina.length;

const dirPenultimoEnlace =  enlacesPagina[numEnlacesPagina-2].href;

const numEnlacesTercerParrafo = document.getElementById('third-paragraph').getElementsByTagName('a').length;

const parrafoNuevo = document.createElement('p');
parrafoNuevo.innerHTML = 'Número de enlaces de la página: ' + numEnlacesPagina + ' - Dirección penúltimo enlace: ' + dirPenultimoEnlace + ' - Nº enlaces tercer párrafo: ' + numEnlacesTercerParrafo;
document.body.appendChild(parrafoNuevo);




