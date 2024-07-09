form = document.getElementById('formulario');
let dataFormatada = []
form.addEventListener('submit', function(event){
    event.preventDefault()
    nome = document.getElementById("name").value;
    data = document.getElementById("birth-date").value
    dataFormatada = data.split('-')
    console.log(`Nome:${nome} , Idade: ${data}`)
    console.log(`Nome:${nome} , Idade: ${dataFormatada.reverse()}`)
})



