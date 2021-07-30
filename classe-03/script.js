const imagensGaleria = document.querySelectorAll('.imagens img');
const imagemModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal')

function abrirModal(src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
}

imagensGaleria.forEach(function (imagem) {
    imagem.addEventListener('click', function (event) {
        abrirModal(event.target.src);
    })
})

modal.addEventListener('click', function () {
    modal.style.display = 'none';
})

// modal.addEventListener('keyPress', function () {
//     if ( modal.event === 'Escape')
//     modal.style.display = 'none';
// })