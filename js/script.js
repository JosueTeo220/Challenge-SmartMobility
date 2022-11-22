console.log('test DOM')
var control = 0
const scrolledElement = document.querySelectorAll('.scrollView');
const menuLink = document.querySelectorAll('.menuLink')
menuLink.forEach(hover => {
    console.log('entrou')
    hover.addEventListener('mouseenter', () => {
        console.log('entrou')
        hover.classList.add('menuEnter')

    });
    hover.addEventListener('mouseleave', () => {
            console.log('saiu')
            hover.classList.remove('menuEnter')
    })
    
})
const menuHeader = document.querySelectorAll('.headerLink')
menuHeader.forEach(hover => {
    console.log('entrou')
    hover.addEventListener('mouseenter', () => {
        console.log('entrou')
        hover.classList.add('menuEnter')
    });
    hover.addEventListener('mouseleave', () => {
            console.log('saiu')
            hover.classList.remove('menuEnter')
    })
    
})



const elementoNaTela = (element, dividendo = 1) => {
    const elementoTop = element.getBoundingClientRect().top;
    return  (
        elementoTop <= (window.innerHeight || document.documentElement.clientHeight) / dividendo
    );
}
const elementoForDaTela = (element) => {
    const elementoTop = element.getBoundingClientRect().top;
    return  (
        elementoTop > (window.innerHeight || document.documentElement.clientHeight)
    );
}
const showElemento = (elemento) => {
    elemento.classList.add('scrolled');
}
const hideElemento = (elemento) => {
    elemento.classList.remove('scrolled');
}
const animateScroll = () =>{
    scrolledElement.forEach((element) =>{
        if(elementoNaTela(element, 1.25)){
            console.log('elementoNaTela');
            showElemento(element);
        }
        else{
            console.log('elementoForaTela')
            hideElemento(element);
        }
    })
}

window.addEventListener('scroll', () => { animateScroll(); });
window.onscroll = () => { animateScroll(); }
