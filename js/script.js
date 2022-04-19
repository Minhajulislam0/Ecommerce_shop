const bargerbtn = document.getElementById('bar');
const closebtn = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bargerbtn){
    bargerbtn.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closebtn){
    closebtn.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}