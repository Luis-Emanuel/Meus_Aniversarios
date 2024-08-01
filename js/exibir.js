import deletar from "./deletar.js";
import editar from "./editar.js";
import { pegaListaAniversario } from "./listaDeAniversario.js";
import { formataData } from "./validaData.js";

const corpoTabela = document.querySelector('[data-corpotabelaaniversarios]');

export function exibirCorpoTabela() {
    corpoTabela.innerHTML = '';

    const aniversarios = pegaListaAniversario()
    aniversarios.forEach(aniversario => {
        exibiLinhaTabela(aniversario.Nome, aniversario.Data);
    });
}

export function exibiLinhaTabela(nome, data) {

    // Cria uma nova linha
    var newRow = corpoTabela.insertRow();

    // Cria novas células e adiciona conteúdo a elas
    var linhaNome = newRow.insertCell(0);
    var linhaData = newRow.insertCell(1);
    var linhaAcoes = newRow.insertCell(2);

    //Cria os botões da celula 3
    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = "Editar";
    btnEditar.addEventListener("click",() => editar(nome, data))
    btnEditar.classList.add('btnEditar')
    
    const btnDeletar = document.createElement('button');
    btnDeletar.innerHTML = "Deletar";
    btnDeletar.onclick = () => deletar(nome);;
    btnDeletar.classList.add('btnDeletar')
    
    linhaNome.innerHTML = nome;
    linhaData.innerHTML = formataData(data);
    linhaAcoes.appendChild(btnEditar);
    linhaAcoes.appendChild(btnDeletar);
}