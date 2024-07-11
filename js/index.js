import formataData from "./validaData.js";

const form = document.querySelector('[data-formulario]');
const campos = form.querySelectorAll('input')

campos.forEach((campo) => {
  campo.addEventListener("blur", () => validaCampo(campo))
})

function validaCampo(campo) {
  if (campo.name == "aniversario") {
    formataData(campo)
  }
}











