export default function adicionaAniversario(evento, aniversarios) {
    let nome = evento.target.elements["nome"].value
    let data = evento.target.elements["aniversario"].value

    const aniversario = {
        "Nome": nome,
        "Data": data
    };
    aniversarios.push(aniversario)
    localStorage.setItem("aniversarios", JSON.stringify(aniversarios));
    criaAniversario()

    evento.target.elements["nome"].value = '';
    evento.target.elements["aniversario"].value = '';
}

function criaAniversario() {
    var tabelaAniversario = document.querySelector('[data-tabelaAniversarios]');

    // Cria uma nova linha
    var newRow = tabelaAniversario.insertRow();

    // Cria novas células e adiciona conteúdo a elas
    var nome = newRow.insertCell(0);
    var data = newRow.insertCell(1);
    var acoes = newRow.insertCell(2);

    //Cria os botões da celula 3
    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = "Editar";
    //btnEditar.addEventListener("click", editar(newRow))
    
    const btnDeletar = document.querySelector('button');
    btnDeletar.innerHTML = "Deletar"
    //btnEditar.addEventListener("click", deletar(newRow))


    nome.innerHTML = "Novo Nome";
    data.innerHTML = "01/01/2021";
    acoes.appendChild = ""

}