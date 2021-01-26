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
    observer.observe(document.querySelector(".sobre-festival"));
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