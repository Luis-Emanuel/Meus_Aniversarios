import adicionaAniversario from "./adiciona.js";
import validacao from "./validaCampos.js";

const form = document.querySelector('[data-formulario]');

validacao()
const aniversarios = []

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  adicionaAniversario(evento, aniversarios)
});






// const btnTeste = document.querySelector('.teste');
// const tabelaAniversario = document.querySelector('[data-tabelaAniversarios]');

