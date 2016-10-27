
function Limpiar(idlista) {
    var opcion = document.getElementById(idlista)
    while (opcion.options.length > 0) {                
        opcion.remove(0);
    }
}        

function Borrar(idlista) {
var idlista = document.getElementById(idlista);
// Seleccionar las opciones
var seleccionado = [];
for (var i = 0; i < idlista.options.length; ++i)
{
    seleccionado[i] = idlista.options[i].selected;
}
// Eliminar las opciones seleccionadas
i = idlista.options.length;
while (i--)
{
    if (seleccionado[i])
    {
        idlista.remove(i);
    }
}
}

function Seleccionar(idvalor,idlista) {
    var valores = document.getElementById(idlista);
    var seleccionado = valores.options.selectedIndex;
    document.getElementById(idvalor).value=valores.options[seleccionado].value;
}


function Anadir(idlista,idvalor) {
    var option = document.createElement("option");
    option.text = document.getElementById(idvalor).value;
    document.getElementById(idlista).add(option);
    document.getElementById(idvalor).value="";
}


function Procesar(idtexto) {
    document.getElementById(idtexto).value = "Hola";
}
