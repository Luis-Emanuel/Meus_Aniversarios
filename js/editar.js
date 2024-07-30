import { exibirCorpoTabela } from "./exibir.js";
import { atulizaListaAniversario, pegaListaAniversario } from "./listaDeAniversario.js";

export default function editar(nome, data){
    console.log(nome, data)
    const listaDeAniversario = pegaListaAniversario()
    const novaListaDeAniversario = listaDeAniversario.filter( aniversario => (aniversario.Nome !== nome))
    atulizaListaAniversario(novaListaDeAniversario)
    exibirCorpoTabela()
    let nomeCampo = document.getElementById("nome");
    let dataCampo = document.getElementById("aniversario");
    nomeCampo.value = nome;
    dataCampo.value = data;
}