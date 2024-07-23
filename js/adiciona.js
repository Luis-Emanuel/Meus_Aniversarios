export default function salvaAniversario(evento, aniversarios) {
    let nome = evento.target.elements["nome"].value
    let data = evento.target.elements["aniversario"].value

    const aniversario = {
        "Nome": nome,
        "Data": data
    };
    aniversarios.push(aniversario)
    localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
    adicionaAniversario(nome, data)

    evento.target.elements["nome"].value = '';
    evento.target.elements["aniversario"].value = '';
}

function adicionaAniversario(nome, data) {
    var tabelaAniversario = document.querySelector('[data-corpoTabelaAniversarios]');

    // Cria uma nova linha
    var newRow = tabelaAniversario.insertRow();

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