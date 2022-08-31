let year;
const date = document.getElementById("rights");
year = new Date().getFullYear();
date.innerText=`Copyright Reserved ${year}`;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main_ul');

hamburger.addEventListener('click',open);

function open()
{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

document.querySelectorAll('.list').forEach(n=>n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))