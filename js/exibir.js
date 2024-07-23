const corpoTabela = document.querySelector('[data-corpotabelaaniversarios]');

export function exibirCorpoTabela() {
    corpoTabela.innerHTML = '';
    const aniversarios = JSON.parse(localStorage.getItem('aniversarios'))
    aniversarios.forEach(aniversario => {
        exibiLinhaTabela(aniversario.Nome, aniversario.Data)
    })
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
    //btnEditar.addEventListener("click", editar(newRow))

    const btnDeletar = document.createElement('button');
    btnDeletar.innerHTML = "Deletar"
    //btnEditar.addEventListener("click", deletar(newRow))

    linhaNome.innerHTML = nome;
    linhaData.innerHTML = data;
    linhaAcoes.appendChild(btnEditar);
    linhaAcoes.appendChild(btnDeletar);
}