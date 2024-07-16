import { validaAniversario } from './validaData.js';

const form = document.querySelector('[data-formulario]');
const btnsalvaAniversario = document.querySelector('[data-btnsalvaAniversario]');
const campos = form.querySelectorAll('input');

export default function validacao() {
    campos.forEach((campo) => {
        campo.addEventListener("blur", () => validaCampo(campo))
        btnsalvaAniversario.addEventListener("click", () => validaCampo(campo))
        campo.addEventListener("invalid", (evento) => evento.preventDefault())
    })
}


function validaCampo(campo) {
    let mensagem = '';
    campo.setCustomValidity('');
    if (campo.name == 'aniversario') {
        validaAniversario(campo);
    }

    tiposErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem_erro');
    const validorInput = campo.checkValidity();

    if (!validorInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = '';
    }
}

const tiposErros = [
    'valueMissing', //Nome e Data - Não pode ficar em branco o campo
    'patternMismatch', // Nome - tem que respeitar o patter
    'tooShort', // Nome - Não pode ser curto 
    'customError' //Data - tem que ser menor que o dia atual 
]

const mensagens = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        tooShort: 'Por favor, preencha um nome válido.',
        patternMismatch: 'Nome deve conter apenas letras'
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'A data infromada deve ser menor que a data atual.'
    }
}