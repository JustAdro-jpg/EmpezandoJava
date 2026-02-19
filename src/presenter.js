import saludar from "./saludador";

const form = document.querySelector("#saludar-form");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const genero = document.querySelector("#genero");
const idioma = document.querySelector("#idioma");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreValor = nombre.value;
    const edadValor = Number.parseInt(edad.value);
    const generoValor = genero.value;
    const idiomaValor = idioma.value;

    const mensaje = saludar(
        nombreValor,
        edadValor,
        generoValor,
        idiomaValor
    );

    div.innerHTML = `<p>${mensaje}</p>`;
});
