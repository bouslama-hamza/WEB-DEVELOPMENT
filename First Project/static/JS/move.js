let play   = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]                                    
//
console.log(play)
let red    = [60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58] 
let bleu   = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13]         
let yellow = [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
let green  = [45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]

                                    // for the first player //
//the rooler//
let rooler = document.getElementById("rooler")
// the player iteams //
let btn_r_1 = document.getElementById("btn_r_1")
let btn_r_2 = document.getElementById("btn_r_2")
let btn_r_3 = document.getElementById("btn_r_3")
let btn_r_4 = document.getElementById("btn_r_4")
                                    //  for the second player //
// the player iteams //
let btn_b_1 = document.getElementById("btn_b_1")
let btn_b_2 = document.getElementById("btn_b_2")
let btn_b_3 = document.getElementById("btn_b_3")
let btn_b_4 = document.getElementById("btn_b_4")
                                    // for the therd player //
// ther player iteams //
let btn_y_1 = document.getElementById("btn_y_1")
let btn_y_2 = document.getElementById("btn_y_2")
let btn_y_3 = document.getElementById("btn_y_3")
let btn_y_4 = document.getElementById("btn_y_4")
                                     // for the fourd player //
// ther player iteams //
let btn_g_1 = document.getElementById("btn_g_1")
let btn_g_2 = document.getElementById("btn_g_2")
let btn_g_3 = document.getElementById("btn_g_3")
let btn_g_4 = document.getElementById("btn_g_4")
                                    // for sounds //
let dicesound   = document.getElementById("dice_song")
let inoutsound  = document.getElementById("inout_song")
let killedsound = document.getElementById("kille_song")
let stepsound   = document.getElementById("step_song")
let winsound    = document.getElementById("win_song")
                                    // first position //
let first_possition = ['p_60','p_15','p_30','p_45']
                                // totale number of iteams //
let number_of_iteams = 12
                                       //total iteams//
let red_iteam    = ['r_1','r_2','r_3','r_4']
let bleu_iteam   = ['b_1','b_2','b_3','b_4']
let yellow_iteam = ['y_1','y_2','y_3','y_4']
let green_iteam  = ['g_1','g_2','g_3','g_4']
                                        //total move//
let red_move    = [0,0,0,0]
let bleu_move   = [0,0,0,0]
let yellow_move = [0,0,0,0]
let green_move  = [0,0,0,0]
                                   //totale iteams finished//
let red_fin    = 4
let green_fin  = 4
let bleu_fin   = 4
let yellow_fin = 4
                                        // let's play//
let turne = 1
document.getElementById(`rool_move_1`).appendChild(rooler)
rooler.addEventListener('click',()=>{
    if(turne == 1){
        if((rool() == 6)){
            inoutsound.play()
            play[60] = red_iteam.pop()
            add_first_iteam('r',play[60])
        }
        else if(rool() != 6 && red_iteam.length != 4){
            x = rool()
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
        else{
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
    }
    else if(turne == 2){
        if((rool() == 6)){
            inoutsound.play()
            play[15] = bleu_iteam.pop()
            add_first_iteam('b',play[15])
        }
        else if(rool() != 6 && bleu_iteam.length != 4){
            x = rool()
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
        else{
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
    }
    else if(turne == 3){
        if((rool() == 6)){
            inoutsound.play()
            play[30] = yellow_iteam.pop()
            add_first_iteam('y',play[30])
        }
        else if(rool() != 6 && yellow_iteam.length != 4){
            x = rool()
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
        else{
            turne = turn(turne)
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
    }
    else if(turne == 4){
        if((rool() == 6)){
            inoutsound.play()
            play[45] = green_iteam.pop()
            add_first_iteam('g',play[45])
        }
        else if(rool() != 6 && green_iteam.length != 4){
            x = rool()
            turne = 1
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
        else{
            turne = 1
            document.getElementById(`rool_move_${turne}`).appendChild(rooler)
        }
    }
})

function move(name,num,rool){
                            // for the red player //
    if(name  == 'r'){
        if(num == 1){
            red_move[0] += rool
            document.getElementById(`p_${red[red_move[0]]}`).appendChild(btn_r_1)
            stepsound.play()
        }
        else if(num == 2 && red_iteam.find('r_2' == false)){
            red_move[1] += rool
            document.getElementById(`p_${red[red_move[1]]}`).appendChild(btn_r_2)
            stepsound.play()
        }
        else if(num == 3){
            red_move[2] += rool
            document.getElementById(`p_${red[red_move[2]]}`).appendChild(btn_r_3)
            stepsound.play()
        }
        else if(num == 4){
            red_move[3] += rool
            document.getElementById(`p_${red[red_move[3]]}`).appendChild(btn_r_4)
            stepsound.play()
        }
    }
                            // for the bleu player //
    else if(name  == 'b'){
        if(num == 1){
            bleu_move[0] += rool
            document.getElementById(`p_${bleu[bleu_move[0]]}`).appendChild(btn_b_1)
            stepsound.play()
        }
        else if(num == 2){
            bleu_move[1] += rool
            document.getElementById(`p_${bleu[bleu_move[1]]}`).appendChild(btn_b_2)
            stepsound.play()
        }
        else if(num == 3){
            bleu_move[2] += rool
            document.getElementById(`p_${bleu[bleu_move[2]]}`).appendChild(btn_b_3)
            stepsound.play()
        }
        else if(num == 4){
            bleu_move[3] += rool
            document.getElementById(`p_${bleu[bleu_move[3]]}`).appendChild(btn_b_4)
            stepsound.play()
        }
    }
                            // for the yellow player //
    else if(name  == 'y'){
        if(num == 1){
            yellow_move[0] += rool
            document.getElementById(`p_${yellow[yellow_move[0]]}`).appendChild(btn_y_1)
            stepsound.play()
        }
        else if(num == 2){
            yellow_move[1] += rool
            document.getElementById(`p_${yellow[yellow_move[1]]}`).appendChild(btn_y_2)
            stepsound.play()
        }
        else if(num == 3){
            yellow_move[2] += rool
            document.getElementById(`p_${yellow[yellow_move[2]]}`).appendChild(btn_y_3)
            stepsound.play()
        }
        else if(num == 4){
            yellow_move[3] += rool
            document.getElementById(`p_${yellow[yellow_move[3]]}`).appendChild(btn_y_4)
            stepsound.play()
        }
    }
                            // for the green player //
    else if(name  == 'g'){
        
        if(num == 1){
            green_move[0] += rool
            document.getElementById(`p_${green[green_move[0]]}`).appendChild(btn_g_1)
            stepsound.play()
        }
        else if(num == 2){
            green_move[1] += rool
            document.getElementById(`p_${green[green_move[1]]}`).appendChild(btn_g_2)
            stepsound.play()
        }
        else if(num == 3){
            green_move[2] += rool
            document.getElementById(`p_${green[green_move[2]]}`).appendChild(btn_g_3)
            stepsound.play()
        }
        else if(num == 4){
            green_move[3] += rool
            document.getElementById(`p_${green[green_move[3]]}`).appendChild(btn_g_4)
            stepsound.play()
        }
    }
  
}


function kill(){}









function rool(){
    dicesound.play()
        let y = Math.floor((Math.random()*6)+1)
        rooler.src = `static/images/dice-${y}.png`
    return y
}

function add_first_iteam(x,y){
    if(x == 'r'){document.getElementById(first_possition[0]).appendChild(document.getElementById(`btn_${y}`))}
    else if(x == 'b'){document.getElementById(first_possition[1]).appendChild(document.getElementById(`btn_${y}`))}
    else if(x == 'y'){document.getElementById(first_possition[2]).appendChild(document.getElementById(`btn_${y}`))} 
    else if(x == 'g'){document.getElementById(first_possition[3]).appendChild(document.getElementById(`btn_${y}`))}
}

function turn(x){
    return x += 1
}
/*
function he_touch_another_button(x){
    document.getElementById(`b_${x}`).addEventListener('click',(t)=>{
        if(x == 'r'){
            if(t.target.id == `btn_${x}_2`){p_r_1.appendChild(btn_r_2)}
            else if(t.target.id == `btn_${x}_3`){p_r_1.appendChild(btn_r_3)}
            else if(t.target.id == `btn_${x}_4`){p_r_1.appendChild(btn_r_4)}
        }
    })
}*/