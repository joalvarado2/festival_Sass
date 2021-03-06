document.addEventListener("DOMContentLoaded", function() {
    scrollNav();

    navegacionFija();
});

function navegacionFija() {
    const barra = document.querySelector(".header");

    //registrar el intersection Observer
    const observer = new IntersectionObserver(entries =>
        entries[0].isIntersecting
       ? barra.classList.remove('fijo')
       : barra.classList.add('fijo')
       )

    // elemento a observar
    observer.observe(document.querySelector(".video"));
};

function scrollNav() {  // funcion para hacer scroll en los enlaces dentro de la pagina
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    enlaces.forEach( function(enlace) {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        // añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement("LI");
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //Generando la imagen
    const imagen = document.createElement("IMG");
    imagen.src = `build/img/grande/${id}.webp`

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // cuando se da click, cerrar imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body");
    }
    
    //Boton para cerra imagen
    const cerrarImagen = document.createElement("P");
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("btn-cerrar");

    // cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}