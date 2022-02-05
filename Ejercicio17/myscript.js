var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    alert("Documento guardado correctamente");
});


var inputTextNombre = document.getElementsByTagName("input")[0];

inputTextNombre.addEventListener("focusin", onFocusInInputTextNombre);
inputTextNombre.addEventListener("focusout", onFocusOutInputTextNombre);

function onFocusInInputTextNombre() {
    console.log("Focus In");
    inputTextNombre.style.backgroundColor = "yellow";
}

function onFocusOutInputTextNombre() {
    console.log("Focus Out");
    inputTextNombre.style.backgroundColor = "aquamarine";
}

var inputTextLetra = document.getElementsByTagName("input")[1];

inputTextLetra.addEventListener("keyup", onKeyUpInputTextLetra);

function onKeyUpInputTextLetra() {
    console.log("Key up");
    var letra ='';
    letra = inputTextLetra.value.charAt(inputTextLetra.value.length-1);
    if (letra == letra.toUpperCase()) {
        inputTextLetra.style.color = "red";
    }
    else if (letra == letra.toLowerCase()) {
        inputTextLetra.style.color = "blue";
    }
}







