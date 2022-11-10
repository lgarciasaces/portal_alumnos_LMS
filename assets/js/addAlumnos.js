const alumnos = [
  ["Aaron Geovanny Banegas Flores", "#"],
  ["Abel Bullon Aguiar", "#"],
  ["Diogo Reis Santos", "#"],
  ["Grabiela Paola Calderón Polo", "#"],
  ["Marcos Romero Pérez", "#"],
  ["Richard Antonio Quispe Paico", "#"],
  ["Robin Álvarez Grahovec", "#"],
  ["Rocío Higueras Contreras", "#"],
];

var seccion = document.getElementById("alumnos");

for (var i = 0; i < alumnos.length; i++) {
    console.log(i);
    // creamos nodo article
    var articulo = document.createElement("article");
    seccion.appendChild(articulo);
    // nodo a
    var a = document.createElement("a");
    a.href = "#";
    articulo.append(a);

    // nodo figure
    var fig = document.createElement("figure");
    a.appendChild(fig);
    // nodo img
    var image = document.createElement("img");
    image.src = "assets/imgs/avatar/avatar0" + (i+2) + ".png";
    image.alt = alumnos[i][0];
    fig.appendChild(image);

    // figcaption
    var figcaption = document.createElement("figcaption");
    fig.appendChild(figcaption);
    var texto = document.createTextNode(alumnos[i][0]);
    figcaption.appendChild(texto);

    //
    seccion.appendChild(articulo);
}
