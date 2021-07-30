const buttonHelp = document.querySelector('.help-button');
const quotesHelp = document.querySelector('.help-quotes');

buttonHelp.addEventListener('click', showTag);

function showTag (event) {
    quotesHelp.classList.toggle('hide')
}