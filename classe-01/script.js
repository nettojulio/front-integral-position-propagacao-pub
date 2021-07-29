const trocarImagem = document.querySelector('.encripted');
const trocarCriptacao = document.querySelector('#password')

let cript = true;

trocarImagem.addEventListener('click', function () {
    if (cript) {
        trocarImagem.src = './assets/olho-aberto.svg';
        trocarCriptacao.type = 'text';
        cript = false;
    } else {
        trocarImagem.src = './assets/olho-fechado.svg';
        trocarCriptacao.type = 'password';
        cript = true;
    }
});