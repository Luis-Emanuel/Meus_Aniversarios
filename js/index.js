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































//console.log("Agora faça a logica de exibir a tabela, primeiro o thead com 'nome', 'Data de aniversario' e 'ações'. E depois percorra o array 'aniversarios' criando linhas para cada data, meu conselho é aproveitar a logica da função adicionaAniversario(), pega a parte que cria as linhas e celulas e externaliza em uma função, essa função vai receber 2 parametros: nome e data.")
