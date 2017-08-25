// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){
  var palabra = "Google";
  for(var i = 0; i < noticias.length;i++){
    var noticia = noticias[i];
    if (contienePalabra(noticia,palabra)){
      ocultarNoticia(noticia);
    }
  }
}

// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra, color){
  var i =0;
  while (i < noticias.length) {
    var noticia = noticias[i];
    if (contienePalabra(noticia,palabra)) {
      cambiarColor(noticia, color);
    }
    i++;
  }
}

function recortarNoticias(cantPalabras){
  for(var i = 0; i < noticias.length; i++){
    var noticia = noticias[i];
    recortarTexto(noticia, cantPalabras);
  }
}

// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()
// ...

ocultarNoticiasQueContengan();

resaltarNoticiasQueContengan('robots', "#00d0c2");

resaltarNoticiasQueContengan('ARGENTINA', "#4185f4")

recortarNoticias(20);
