
const day=document.querySelector('.btn .fa-sun'),
button=document.querySelector('.btn');
const nav = document.querySelector('.header');
const header=document.querySelectorAll('.header .nav a')
const home = document.querySelector('.home')
const img = document.querySelector('.home .image img')
const logo = document.querySelector('.header .logo span')
const sun=document.querySelector('.fa-sun')
day.addEventListener('click',()=>{
    if(document.body.style.background=='black'){
        document.body.style.background='white';
        button.style.background='black';
        sun.className='fa-solid fa-sun';
        sun.style.color='white';
        sun.style.marginLeft="0px";
        nav.style.background='#c9ff33ed'
        nav.style.color='black';
        logo.style.color='#bb10e6'
        // img.src="images/homePhoto-removebg-preview.png"
        // img.style.marginRight='0px'



        // nav.style.color='#c9ff33ed'
        // header.style.color='';
        home.style.color='black'

        header.forEach(a=>{
            a.style.color='black'
        })


    }
    else{
        document.body.style.background='black';
        button.style.background='white';
        sun.className='fa-solid fa-moon';
        sun.style.color='black'
        sun.style.marginLeft="35px";
        nav.style.background='#7d32f1';
        // header.style.color='white';
        home.childNode.style.color='white'
        logo.style.color='orange'

        nav.style.color='white';

        header.forEach(a=>{
            a.style.color='white'
        })
        // img.src='images/c941fcba-bf61-437f-b044-c878161345cc-removebg-preview (1).png'
        // img.style.marginRight='160px'
    }
    


})
