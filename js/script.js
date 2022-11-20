const scrolledElement = document.querySelectorAll('.scrollView');
console.log('ola')

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
const displayElemento = (elemento) => {
    elemento.classList.add('scrolled');
}
const hideElemento = (elemento) => {
    elemento.classList.remove('scrolled');
}
const animateScroll = () =>{
    scrolledElement.forEach((element) =>{
        if(elementoNaTela(element, 1.25)){
            console.log('elementoNaTela');
            displayElemento(element);
        }
        else if(elementoForDaTela(element)){
            console.log('elementoForaTela')
            hideElemento(element);
        }
    })
}
window.addEventListener("scroll", ()=>{
    animateScroll();
})