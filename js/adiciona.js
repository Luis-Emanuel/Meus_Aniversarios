import { exibirCorpoTabela } from "./exibir.js";


export default function salvaAniversario(evento, aniversarios) {
    let nome = evento.target.elements["nome"].value
    let data = evento.target.elements["aniversario"].value

    const aniversario = {
        "Nome": nome,
        "Data": data
    };
    aniversarios.push(aniversario)
    localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
    exibirCorpoTabela()

    evento.target.elements["nome"].value = '';
    evento.target.elements["aniversario"].value = '';
}

