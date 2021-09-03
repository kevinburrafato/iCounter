const add = document.querySelector('button.increase');
const remove = document.querySelector('button.decrease');
let countNumber = document.querySelector('.countNumber h1');

add.addEventListener('click', function(){
    countNumber.innerHTML++;
})

remove.addEventListener('click', function(){
    countNumber.innerHTML--;
})
