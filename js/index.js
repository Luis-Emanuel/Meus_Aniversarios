import salvaAniversario from "./adiciona.js";
import { exibirCorpoTabela } from "./exibir.js";
import { pegaListaAniversario } from "./listaDeAniversario.js";
import validacao from "./validaCampos.js";

const form = document.querySelector('[data-formulario]');
const aniversarios = pegaListaAniversario();

if (Object.entries(aniversarios).length != 0) {
  exibirCorpoTabela(aniversarios);
};

validacao();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  salvaAniversario(event);
});
