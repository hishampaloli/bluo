const labels = document.querySelectorAll('a');
const container = document.querySelector('.container');
const  showers = document.querySelectorAll('.shower');
const showerHovs = document.querySelectorAll('.shower-hov');
const landing = document.querySelector('.landing');
const showerd = document.querySelectorAll('.showerd');
const navOpen = document.getElementById('icon'); 
const bigNav = document.querySelector('.nav-big');
const showerPro = document.querySelectorAll('.showerPro');
const nav = document.querySelector('.nav');
const cr = document.querySelector('.fa-x');
const ham = document.querySelector('.fa-bars');
const percentages = document.querySelectorAll('.data');
const lines = document.querySelectorAll('.lineS')
const skill = document.querySelectorAll('.per');
const faqsIcon = document.querySelectorAll('.fa-chevron-down');
const faqs = document.querySelectorAll('.faq')
const showTexts = document.querySelectorAll('.faq-text')

window.addEventListener('scroll',showThings);

showThings()

window.addEventListener('load', ()=> {
    function shw(){
        container.classList.add('load')
    }
    setTimeout(shw,500)
})

navOpen.addEventListener('click', () => {
    bigNav.classList.toggle('big');

    if(bigNav.classList.contains('big')){
        cr.style.display = 'flex'
        ham.style.display = 'none'
    }else{
        cr.style.display = 'none'
        ham.style.display = 'flex'
    }
})


function showThings(){
    let trigger = window.innerHeight / 5 * 4.2;
    let trigger1 = window.innerHeight / 5 * 2.7;
    let trigger2 = window.innerHeight / 5 * 4.5;

    showers.forEach(showe => {
        const boxhight = showe.getBoundingClientRect().top;
        if(boxhight < trigger){
            showe.style.transition = `${1}s ease`
            showe.style.opacity = 1
            showe.style.transform = `scale(${1})`
        }
    })

    showerHovs.forEach(sho => {
        const boxhight = sho.getBoundingClientRect().top;
        if(boxhight < trigger){
            sho.classList.add('show-up')
        }
    })

    showerPro.forEach(pro => {
        const boxhight = pro.getBoundingClientRect().top;
        if(boxhight < trigger1){
            pro.style.transition = `${1}s ease`
            pro.style.opacity = 1
            pro.style.transform = `scale(${1})`
        }

    })
    showerd.forEach(shd => {
        const boxhight = shd.getBoundingClientRect().top;
        if(boxhight < trigger2){
            shd.style.transition = `${1}s ease`
            shd.style.opacity = 1
            shd.style.transform = `scale(${1})`
        }  
    })

    skill.forEach((pr,idx) => {
        
        const boxhight = pr.getBoundingClientRect().top;
        if(boxhight < trigger2){
            width()
        }
    })

    const laHight = landing.getBoundingClientRect().bottom;
    const navHight = nav.getBoundingClientRect().top
    if(laHight < navHight){
        nav.classList.add('tras')
    }else{
        nav.classList.remove('tras')
    }
}

faqsIcon.forEach((icon,idx) => {
    icon.addEventListener('click', () => {
        faqs[idx].classList.toggle('active')

    })
})

function width(){
    percentages.forEach((perc,idx) =>{
        const percentage = perc.getAttribute('data-target')
        lines[idx].style.width = percentage + "%"
    
    })
}

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style = transition-delay:${idx * 50}ms>${letter}</span>`)
    .join('');
})