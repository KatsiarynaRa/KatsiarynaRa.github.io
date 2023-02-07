let btn = document.querySelector('.button')
let sun = document.querySelector('.sun')
let sky = document.querySelector('.sky')

btn.addEventListener('click', function(){
    if (btn.innerHTML == 'ночь'){
        sky.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/starfield_stock_1.jpg'  
        sun.style.backgroundColor =  '#c5c28d'
        btn.innerHTML = 'день'
    } else {
        sky.style.backgroundImage = 'linear-gradient(to bottom, #65a9f0, #ebb2b1)'
        sun.style.backgroundColor = '#f5e555'
        btn.innerHTML = 'ночь'
    }

    
})