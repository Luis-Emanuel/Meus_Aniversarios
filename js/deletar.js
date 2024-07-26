import { exibirCorpoTabela } from "./exibir.js"
import { atulizaListaAniversario } from "./listaDeAniversario.js";

export default function deletar(nome) {
    var aniversarios = JSON.parse(localStorage.getItem('aniversarios'))
    var aniversariDeletado = aniversarios.filter(aniversario => (aniversario.Nome !== nome))
    atulizaListaAniversario(aniversariDeletado);
    exibirCorpoTabela();
}