document.addEventListener("DOMContentLoaded", function() {
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
};

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
});
// modal 
const modal = document.querySelectorAll('.modal');
const openModal = document.querySelector('.open_modal');
const closeModal = document.querySelector('.close_modal');

modal.forEach((modal)=> {
    openModal.addEventListener('click', () => {
        modal.classList.add('modal-show');
    });
    closeModal.addEventListener('click', () => {
        modal.classList.remove('modal-show');
    });
});

// validaciones del formulario 
const nameField = document.querySelector('#name_label');
const emailField = document.querySelector('#email_label');
const subjectField = document.querySelector('#subject_label');
const commentsField = document.querySelector('#comments_label');

const setErrors = (message, field, isError = true) => {
    if (isError) {
        field.classList.add('invalid');
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerHTML = message;
    } else {
        field.classList.remove('invalid');
        field.nextElementSibling.classList.remove('error');
        field.nextElementSibling.innerHTML = "";
    }
}
// validar campos vacios 
const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
    } else {
        setErrors("", field, false);
    }
}
// validar email correcto
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        setErrors("Debe ingresar un email válido", field);
    } else {
        setErrors("", field, false);
    }
}

nameField.addEventListener("blur", (e) => validateEmptyField("Este campo no puede estar vacío", e));
emailField.addEventListener("blur", (e) => validateEmptyField("Debe ingresar un email válido", e));
subjectField.addEventListener("blur", (e) => validateEmptyField("Este campo no puede estar vacío", e));
commentsField.addEventListener("blur", (e) => validateEmptyField("Este campo no puede estar vacío", e));

emailField.addEventListener("input", validateEmailFormat);
});
// FAQS
const preguntas = document.querySelectorAll(".preguntaEncabezado");

preguntas.forEach((pregunta) => {
pregunta.addEventListener("click", () => {
		removerClaseActivo();
	 pregunta.nextElementSibling.classList.add("activo");
	});
});

function removerClaseActivo() {
	preguntas.forEach((pregunta) => {
		pregunta.nextElementSibling.classList.remove("activo");
	});
}