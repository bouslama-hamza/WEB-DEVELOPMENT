let submit = document.getElementById("submit")

let num = document.getElementById("num")

let buy = 0

let circle  = document.getElementById("circle")

submit.addEventListener('click' ,()=>{

    buy +=1
    num.innerText = buy
    circle.style.backgroundColor = "green"
    if (buy > 1){num.innerText = 0 ;buy = 0;circle.style.backgroundColor="black"}

})

