import salvaAniversario from "./adiciona.js";
import { exibirCorpoTabela } from "./exibir.js";
import { pegaListaAniversario } from "./listaDeAniversario.js";
import validacao from "./validaCampos.js";

const form = document.querySelector('[data-formulario]');
const campos = form.querySelectorAll('input');
const aniversarios = pegaListaAniversario();

if (Object.entries(aniversarios).length != 0) {
  exibirCorpoTabela(aniversarios);
};

validacao();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  salvaAniversario(event);
});

//Mensagem de campo obrigatorio
campos.forEach((campo) => {
  if (campo.validity.valueMissing) {
    const mensagemCampoObrigatorio = document.querySelector(`label[for="${campo.name}"]`)
    const spanElement = mensagemCampoObrigatorio.querySelector('span');
    spanElement.innerHTML = '(<span>Campo Obrigatoririo</span>)';
  }
})