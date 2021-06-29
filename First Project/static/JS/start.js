let turn = 1
document.getElementById("rool").addEventListener('click', v =>{
    if(turn == 1){   
        m=start_player('r')
        
            if(v.target.id == 'btn_r_1'){document.getElementById(`p_60`).appendChild(document.getElementById("btn_r_1"))}
            else if(v.target.id == 'btn_r_2'){document.getElementById(`p_60`).appendChild(document.getElementById("btn_r_2"))}
            else if(v.target.id == 'btn_r_3'){document.getElementById(`p_60`).appendChild(document.getElementById("btn_r_3"))}
            else if(v.target.id == 'btn_r_4'){document.getElementById(`p_60`).appendChild(document.getElementById("btn_r_4"))}
    }
    else if(turn == 2){
        document.getElementById("rool_b_1").addEventListener('click',()=>{
        m=start_player('b')
        if(m == 6){
            if(v.target.id == 'btn_b_1'){document.getElementById(`p_15`).appendChild(document.getElementById("btn_b_1"))}
            else if(v.target.id == 'btn_b_2'){document.getElementById(`p_15`).appendChild(document.getElementById("btn_b_2"))}
            else if(v.target.id == 'btn_b_3'){document.getElementById(`p_15`).appendChild(document.getElementById("btn_b_3"))}
            else if(v.target.id == 'btn_b_4'){document.getElementById(`p_15`).appendChild(document.getElementById("btn_b_4"))}
        }
        else {turn = 3}
    })
    }
    else if(turn == 3){
        document.getElementById("rool_y_1").addEventListener('click',()=>{
        m=start_player('y')
        if(m == 6){
            if(v.target.id == 'btn_y_1'){document.getElementById(`p_30`).appendChild(document.getElementById("btn_y_1"))}
            else if(v.target.id == 'btn_y_2'){document.getElementById(`p_30`).appendChild(document.getElementById("btn_y_2"))}
            else if(v.target.id == 'btn_y_3'){document.getElementById(`p_30`).appendChild(document.getElementById("btn_y_3"))}
            else if(v.target.id == 'btn_y_4'){document.getElementById(`p_30`).appendChild(document.getElementById("btn_y_4"))}
        }
        else{turn = 4}
    })
    }
    else{
        document.getElementById("rool_g_1").addEventListener('click',()=>{
        m=start_player('g')
        if(m == 6){
            if(v.target.id == 'btn_g_1'){document.getElementById(`p_45`).appendChild(document.getElementById("btn_g_1"))}
            else if(v.target.id == 'btn_g_2'){document.getElementById(`p_45`).appendChild(document.getElementById("btn_g_2"))}
            else if(v.target.id == 'btn_g_3'){document.getElementById(`p_45`).appendChild(document.getElementById("btn_g_3"))}
            else if(v.target.id == 'btn_g_4'){document.getElementById(`p_45`).appendChild(document.getElementById("btn_g_4"))}
        }
        else{turn = 1}
    })
    }
})

function start_player(n){
    let max = 0
    x = Math.floor((Math.random()*6)+1)
    men = setInterval(() =>{
        max +=1
        y = Math.floor((Math.random()*6)+1)
        document.getElementById(`rool_${n}`).src = `static/images/dice-${y}.png`
        if (max == 10){
            document.getElementById(`rool_${n}`).src = `static/images/dice-${x}.png`
            clearInterval(men)
        }
    },80)
    return x
}







    /*

    document.getElementById("rool_r_1").addEventListener('click',()=>{
        m=start_player('r')
    })

else if(turn == 2){
    document.getElementById("rool_b_1").addEventListener('click',()=>{
        m=start_player('b')
        if(m == 6){start_second_player()}
        else{turn = 3}
    })
}
else if(turn == 3){
    document.getElementById("rool_y_1").addEventListener('click',()=>{
        m=start_player('y')
        if(m == 6){start_therd_player()}
        else{turn = 4}
    })
}
else if(turn == 4){
    document.getElementById("rool_b_1").addEventListener('click',()=>{
        m=start_player('y')
        if(m == 6){start_fourd_player()}
        else{turn = 1}
    })
}
}
                        //to make red's button play//
function start_first_player(){
    document.addEventListener('click' ,(v) => {
        
    })
}
                        //to make bleu's button play//
function start_second_player(){
    document.addEventListener('click' ,(v) => {
        
    })
}
                        //to make yellow's button play//
function start_therd_player(){
    document.addEventListener('click' ,(v) => {
        
    })
}      
                        //to make green's button play//
function start_fourd_player(){
    document.addEventListener('click' ,(v)=>{
       
    })
}   

*/



/*
rool.addEventListener('click', ()=>{
    let max = 0
    x = Math.floor((Math.random()*6)+1)
    document.getElementById("rool_r_1").src = `static/images/dice-${Math.floor((Math.random()*6)+1)}.png`
    men = setInterval(xit,150)
    function xit(){
        max +=1
        x = Math.floor((Math.random()*6)+1)
        document.getElementById("rool_c").src = `static/images/dice-${x}.png`
        if (max == 10){clearInterval(men)}
    }
})*//*
let move = 0

let tests = 0

let rest = 0
btn.addEventListener('click', ()=>{
    
    if(move < 56){ 

        rest = move
        console.log(rest)
        move += Number(x)
        console.log(move)
        exit = setInterval(test,150)

        function test(){
            rest += 1
            if(rest == move){clearInterval(exit)}
            document.getElementById(`p_${rest}`).appendChild(btn)
        }
    }
    else{
        let rand = Math.floor((Math.random()*6)+1);
        tests += rand
        if(tests == 7){ 
            document.getElementById(`p_r_7`).appendChild(btn)
            removeEventListener('click',(btn))}
        else if(tests > 7){tests -= rand}
            exit = setInterval(test,150)
            function test(){
                rest += 1
                if(rest == move){clearInterval(exit)}
                document.getElementById(`p_r_${tests}`).appendChild(btn)
            }
        
    }
    
})
*/