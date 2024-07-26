export function atulizaListaAniversario(novoAniversarios){
    const aniversarios =  localStorage.setItem('aniversarios', JSON.stringify(novoAniversarios));
    return aniversarios;
}
export function pegaListaAniversario(){
    const aniversarios = JSON.parse(localStorage.getItem('aniversarios')) || [];
    return aniversarios;
}