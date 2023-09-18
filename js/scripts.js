// buscador
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
menuToggle.onclick = function(){
    header.classList.toggle('open');
}

// carrousel de imagenes 
const contenedor = document.querySelector('.contenedor-fotos');
const puntos = document.querySelectorAll('.point');

puntos.forEach((cadaPunto, i) => {
    // click a cada punto
    cadaPunto.addEventListener('click', () => {
        let posicion = i;
        // espacio que debe desplazarse
        let operacion = posicion * - 33.3;
        // movemos el contenedor
        contenedor.style.transform = `translateX(${operacion}%)`;
        //  recorremos todos los puntos 
        puntos.forEach((cadaPunto, j) => {
            // quitar la clase activo
            puntos[j].classList.remove('active');
        })
        // añadir la clase activo al punto clickeado
        cadaPunto.classList.add('active');
    })
})

