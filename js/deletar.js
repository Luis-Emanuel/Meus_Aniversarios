import { exibirCorpoTabela } from "./exibir.js"

export default function deletar(nome) {
    var aniversarios = JSON.parse(localStorage.getItem('aniversarios'))
    var aniversariDeletado = aniversarios.filter(aniversario => (aniversario.Nome != nome))
    localStorage.setItem("aniversarios", JSON.stringify(aniversariDeletado));
    console.log(aniversariDeletado);
    exibirCorpoTabela() ;
}