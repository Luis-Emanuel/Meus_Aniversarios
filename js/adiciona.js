import { exibirCorpoTabela } from "./exibir.js";
import { atulizaListaAniversario, pegaListaAniversario } from "./listaDeAniversario.js";

export default function salvaAniversario(evento) {
    evento.preventDefault();
    const aniversarios = pegaListaAniversario() 

    let nome = evento.target.elements["nome"].value;
    let data = evento.target.elements["aniversario"].value;

    const novoAniversario = {
        Nome: nome,
        Data: data
    };
    
    aniversarios.push(novoAniversario);

    atulizaListaAniversario(aniversarios);

    exibirCorpoTabela();

    evento.target.elements["nome"].value = '';
    evento.target.elements["aniversario"].value = '';
}

