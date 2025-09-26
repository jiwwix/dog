let burger = document.querySelector('.burger');
let menu = document.querySelector('ul');
burger.addEventListener('click',run);

function run (){
    burger.classList.toggle('active');
    menu.classList.toggle('show');
}