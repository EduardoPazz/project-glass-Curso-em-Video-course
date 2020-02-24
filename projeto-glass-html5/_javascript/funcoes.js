/* changing header img by the hover of the mouse in the nav items */

const links = document.querySelectorAll('nav li')
const img = document.querySelector('header img')
const defaultImageSource = document.querySelector('header img').src;

links.forEach(link => {
    let src;

    switch (link.textContent) {
        case 'Home':
            src = './_imagens/home.png';
            break;

        case 'Especificações':
            src = './_imagens/especificacoes.png';
            break;

        case 'Fotos':
            src = './_imagens/fotos.png';
            break;

        case 'Multimídia':
            src = './_imagens/multimidia.png';
            break;            

        case 'Fale conosco':
            src = './_imagens/contato.png'
            break;
    }

    link.addEventListener('mouseover', () => img.setAttribute('src', src))
    link.addEventListener('mouseout', () => img.setAttribute('src', defaultImageSource))
})