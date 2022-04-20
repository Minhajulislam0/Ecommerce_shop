// responsive barger button

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

// single product 

const mainImg = document.getElementById('main-img');
const subImg = document.getElementsByClassName('small-img');

subImg[0].onclick = function(){
    mainImg.src = subImg[0].src;
}
subImg[1].onclick = function(){
    mainImg.src = subImg[1].src;
}
subImg[2].onclick = function(){
    mainImg.src = subImg[2].src;
}
subImg[3].onclick = function(){
    mainImg.src = subImg[3].src;
}
subImg[4].onclick = function(){
    mainImg.src = subImg[4].src;
}

