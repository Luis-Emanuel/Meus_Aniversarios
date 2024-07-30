export function validaAniversario(campo) {
    const dataAtual = new Date();
    const data = new Date(campo.value)
    if (data >= dataAtual) {
        campo.setCustomValidity('A data infromada deve ser menor que a data atual.');
    }
}

export function formataData(data) {
    const dataFormatada = data.split('-').reverse().join('/')
    return dataFormatada
}


