import salvaAniversario from "./adiciona.js";
import { exibirCorpoTabela } from "./exibir.js";
import validacao from "./validaCampos.js";

const form = document.querySelector('[data-formulario]');
const aniversarios = JSON.parse(localStorage.getItem('aniversarios')) || [];

if (Object.entries(aniversarios).length != 0) {
  exibirCorpoTabela();
};

validacao();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  salvaAniversario(event, aniversarios);
});
