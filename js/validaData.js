// FORMATA DATA
export default function formataData(campo){
    const data = campo.value.split('-').reverse().join('/')
    console.log(data)
}


