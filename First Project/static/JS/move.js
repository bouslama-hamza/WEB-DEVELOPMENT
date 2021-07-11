//let play   = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]                                    
let play = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// for the whole player area //
console.log(play.length)
let red    = [60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,100,101,102,103,104,105] 
let bleu   = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13]         
let yellow = [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
let green  = [45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]
                                    // for the first player //
// the rooler //
let rooler = document.getElementById("rooler")
// the player iteams //
let btn_r_1 = document.getElementById("btn_r_1")
let btn_r_2 = document.getElementById("btn_r_2")
let btn_r_3 = document.getElementById("btn_r_3")
let btn_r_4 = document.getElementById("btn_r_4")
                                    // for the second player //
// the player iteams //
let btn_b_1 = document.getElementById("btn_b_1")
let btn_b_2 = document.getElementById("btn_b_2")
let btn_b_3 = document.getElementById("btn_b_3")
let btn_b_4 = document.getElementById("btn_b_4")
                                    // for the therd player //
// the player iteams //
let btn_y_1 = document.getElementById("btn_y_1")
let btn_y_2 = document.getElementById("btn_y_2")
let btn_y_3 = document.getElementById("btn_y_3")
let btn_y_4 = document.getElementById("btn_y_4")
                                    // for the fourd player //
// the player iteams //
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
                                        // behind position //
let red_behind    = ['b_r_1','b_r_2','b_r_3','b_r_4']
let bleu_behind   = ['b_b_1','b_b_2','b_b_3','b_b_4']
let yellow_behind = ['b_y_1','b_y_2','b_y_3','b_y_4']
let green_behind  = ['b_g_1','b_g_2','b_g_3','b_g_4']
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
            play[red[red_move[0]]] = 0
            red_move[0] += rool
            if(play[red[red_move[0]]] != 0){
                kill(play[red[red_move[0]]] , 'r')
            }
            play[red[red_move[0]]] = 'r_1'
            console.log(play)
            document.getElementById(`p_${red[red_move[0]]}`).appendChild(btn_r_1)
            stepsound.play()
        }
        else if(num == 2){
            play[red[red_move[1]]] = 0
            red_move[1] += rool
            if(play[red[red_move[1]]] != 0){
                kill(play[red[red_move[1]]] , 'r')
            }
            play[red[red_move[0]]] = 'r_2'
            console.log(play)
            document.getElementById(`p_${red[red_move[1]]}`).appendChild(btn_r_2)
            stepsound.play()
        }
        else if(num == 3){
            play[red[red_move[2]]] = 0
            red_move[2] += rool
            if(play[red[red_move[2]]] != 0){
                kill(play[red[red_move[2]]] , 'r')
            
            }
            play[red[red_move[2]]] = 'r_3'
            console.log(play)
            document.getElementById(`p_${red[red_move[2]]}`).appendChild(btn_r_3)
            stepsound.play()
        }
        else if(num == 4){
            play[red[red_move[3]]] = 0
            red_move[3] += rool
            if(play[red[red_move[3]]] != 0){
                kill(play[red[red_move[3]]], 'r')
            }
            play[red[red_move[3]]] = 'r_4'
            console.log(play)
            document.getElementById(`p_${red[red_move[3]]}`).appendChild(btn_r_4)
            stepsound.play()
        }
    }
                                    // for the bleu player //
    else if(name  == 'b'){
        if(num == 1){
            play[bleu[bleu_move[0]]]  = 0
            bleu_move[0] += rool
            if(play[bleu[bleu_move[0]]] != 0){
                kill(play[bleu[bleu_move[0]]], 'b')
            }
            play[bleu[bleu_move[0]]] = 'b_1'
            console.log(play)
            document.getElementById(`p_${bleu[bleu_move[0]]}`).appendChild(btn_b_1)
            stepsound.play()
        }
        else if(num == 2){
            play[bleu[bleu_move[1]]] = 0
            bleu_move[1] += rool
            if(play[bleu[bleu_move[1]]]!= 0){
                kill(play[bleu[bleu_move[1]]] , 'b')
            }
            play[bleu[bleu_move[1]]] = 'b_2'
            console.log(play)
            document.getElementById(`p_${bleu[bleu_move[1]]}`).appendChild(btn_b_2)
            stepsound.play()
        }
        else if(num == 3){
            play[bleu[bleu_move[2]]] = 0
            bleu_move[2] += rool
            if(play[bleu[bleu_move[2]]] != 0){
                kill(play[bleu[bleu_move[2]]] , 'b')
            }
            play[bleu[bleu_move[2]]] = 'b_3'
            console.log(play)
            document.getElementById(`p_${bleu[bleu_move[2]]}`).appendChild(btn_b_3)
            stepsound.play()
        }
        else if(num == 4){
            play[bleu[bleu_move[3]]] = 0
            bleu_move[3] += rool
            if(play[bleu[bleu_move[3]]]!= 0){
                kill(play[bleu[bleu_move[3]]], 'b')
            }
            play[bleu[bleu_move[3]]] = 'b_4'
            console.log(play)
            document.getElementById(`p_${bleu[bleu_move[3]]}`).appendChild(btn_b_4)
            stepsound.play()
        }
    }
                                    // for the yellow player //
    else if(name  == 'y'){
        if(num == 1){
            play[yellow[yellow_move[0]]] = 0
            yellow_move[0] += rool
            if(play[yellow[yellow_move[0]]] != 0){
                kill(play[yellow[yellow_move[0]]] , 'y')
            }
            play[yellow[yellow_move[0]]] = 'y_1'
            console.log(play)
            document.getElementById(`p_${yellow[yellow_move[0]]}`).appendChild(btn_y_1)
            stepsound.play()
        }
        else if(num == 2){
            play[yellow[yellow_move[1]]] = 0
            yellow_move[1] += rool
            if(play[yellow[yellow_move[1]]] != 0){
                kill(play[yellow[yellow_move[1]]] , 'y')
            }
            play[yellow[yellow_move[1]]] = 'y_2'
            console.log(play)
            document.getElementById(`p_${yellow[yellow_move[1]]}`).appendChild(btn_y_2)
            stepsound.play()
        }
        else if(num == 3){
            play[yellow[yellow_move[2]]] = 0
            yellow_move[2] += rool
            if(play[yellow[yellow_move[2]]] != 0){
                kill(play[yellow[yellow_move[2]]], 'y')
            }
            play[yellow[yellow_move[2]]] = 'y_3'
            console.log(play)
            document.getElementById(`p_${yellow[yellow_move[2]]}`).appendChild(btn_y_3)
            stepsound.play()
        }
        else if(num == 4){
            play[yellow[yellow_move[3]]] = 0
            yellow_move[3] += rool
            if(play[yellow[yellow_move[3]]] != 0){
                kill(play[yellow[yellow_move[3]]] , 'y')
            }
            play[yellow[yellow_move[3]]] = 'y_4'
            console.log(play)
            document.getElementById(`p_${yellow[yellow_move[3]]}`).appendChild(btn_y_4)
            stepsound.play()
        }
    }
                                    // for the green player //
    else if(name  == 'g'){
        if(num == 1){
            play[green[green_move[0]]] = 0
            green_move[0] += rool
            if(play[green[green_move[0]]] != 0){
                kill(play[green[green_move[0]]] , 'g')
            }
            play[green[green_move[0]]] = 'g_1'
            console.log(play)
            document.getElementById(`p_${green[green_move[0]]}`).appendChild(btn_g_1)
            stepsound.play()
        }
        else if(num == 2){
            play[green[green_move[1]]] = 0
            green_move[1] += rool
            if(play[green[green_move[1]]] != 0){
                kill(play[green[green_move[1]]] , 'g')
            }
            play[green[green_move[1]]] = 'g_2'
            console.log(play)
            document.getElementById(`p_${green[green_move[1]]}`).appendChild(btn_g_2)
            stepsound.play()
        }
        else if(num == 3){
            play[green[green_move[2]]] = 0
            green_move[2] += rool
            if(play[green[green_move[2]]] != 0){
                kill(play[green[green_move[2]]] , 'g')
            }
            play[green[green_move[2]]] = 'g_3'
            console.log(play)
            document.getElementById(`p_${green[green_move[2]]}`).appendChild(btn_g_3)
            stepsound.play()
        }
        else if(num == 4){
            play[green[green_move[3]]] = 0
            green_move[3] += rool
            if(play[green[green_move[3]]] != 0){
                kill(play[green[green_move[3]]] , 'g')
            }
            play[green[green_move[3]]] = 'g_4'
            console.log(play)
            document.getElementById(`p_${green[green_move[3]]}`).appendChild(btn_g_4)
            stepsound.play()
        }
    }
}
function kill(name, turn){
                        // for the red turn // 
    if(turn == 'r'){
            if(name  == 'b_1'){
                document.getElementById(bleu_behind[0]).appendChild(btn_b_1)
                bleu_move[0] = 0
                bleu_iteam.push('b_1')
            }
            else if(name  == 'b_2'){
                document.getElementById(bleu_behind[1]).appendChild(btn_b_2)
                bleu_move[1] = 0
                bleu_iteam.push('b_2')
            }
            else if(name  == 'b_3'){
                document.getElementById(bleu_behind[2]).appendChild(btn_b_3)
                bleu_move[2] = 0
                bleu_iteam.push('b_3')
            }
            else if(name  == 'b_4'){
                document.getElementById(bleu_behind[3]).appendChild(btn_b_4)
                bleu_move[3] = 0
                bleu_iteam.push('b_4')
            }
            else if(name  == 'y_1'){
                document.getElementById(yellow_behind[0]).appendChild(btn_y_1)
                yellow_move[0] = 0
                yellow_iteam.push('y_1')
            }
            else if(name  == 'y_2'){
                document.getElementById(yellow_behind[1]).appendChild(btn_y_2)
                yellow_move[1] = 0
                yellow_iteam.push('y_2')
            }
            else if(name  == 'y_3'){
                document.getElementById(yellow_behind[2]).appendChild(btn_y_3)
                yellow_move[2] = 0
                yellow_iteam.push('y_3')
            }
            else if(name  == 'y_4'){
                document.getElementById(yellow_behind[3]).appendChild(btn_y_4)
                yellow_move[3] = 0
                yellow_iteam.push('y_4')
            }
            else if(name  == 'g_1'){
                document.getElementById(green_behind[0]).appendChild(btn_g_1)
                green_move[0] = 0
                green_iteam.push('g_1')
            }
            else if(name  == 'g_2'){
                document.getElementById(green_behind[1]).appendChild(btn_g_2)
                green_move[1] = 0
                green_iteam.push('g_2')
            }
            else if(name  == 'g_3'){
                document.getElementById(green_behind[2]).appendChild(btn_g_3)
                green_move[2] = 0
                green_iteam.push('g_3')
            }
            else if(name  == 'g_4'){
                document.getElementById(green_behind[3]).appendChild(btn_g_4)
                green_move[3] = 0
                green_iteam.push('g_4')
            }  
    }
                        // for the blue turn //
    else if(turn == 'b'){
            if(name  == 'r_1'){
                document.getElementById(red_behind[0]).appendChild(btn_r_1)
                red_move[0] = 0
                red_iteam.push('r_1')
            }
            else if(name  == 'r_2'){
                document.getElementById(red_behind[1]).appendChild(btn_r_2)
                red_move[1] = 0
                red_iteam.push('r_2')
            }
            else if(name  == 'r_3'){
                document.getElementById(red_behind[2]).appendChild(btn_r_3)
                red_move[2] = 0
                red_iteam.push('r_3')
            }
            else if(name  == 'r_4'){
                document.getElementById(red_behind[3]).appendChild(btn_r_4)
                red_move[3] = 0
                red_iteam.push('r_4')
            }
            else if(name  == 'y_1'){
                document.getElementById(yellow_behind[0]).appendChild(btn_y_1)
                yellow_move[0] = 0
                yellow_iteam.push('y_1')
            }
            else if(name  == 'y_2'){
                document.getElementById(yellow_behind[1]).appendChild(btn_y_2)
                yellow_move[1] = 0
                yellow_iteam.push('y_2')
            }
            else if(name  == 'y_3'){
                document.getElementById(yellow_behind[2]).appendChild(btn_y_3)
                yellow_move[2] = 0
                yellow_iteam.push('y_3')
            }
            else if(name  == 'y_4'){
                document.getElementById(yellow_behind[3]).appendChild(btn_y_4)
                yellow_move[3] = 0
                yellow_iteam.push('y_4')
            }
            else if(name  == 'g_1'){
                document.getElementById(green_behind[0]).appendChild(btn_g_1)
                green_move[0] = 0
                green_iteam.push('g_1')
            }
            else if(name  == 'g_2'){
                document.getElementById(green_behind[1]).appendChild(btn_g_2)
                green_move[1] = 0
                green_iteam.push('g_2')
            }
            else if(name  == 'g_3'){
                document.getElementById(green_behind[2]).appendChild(btn_g_3)
                green_move[2] = 0
                green_iteam.push('g_3')
            }
            else if(name  == 'g_4'){
                document.getElementById(green_behind[3]).appendChild(btn_g_4)
                green_move[3] = 0
                green_iteam.push('g_4')
            }  
    }
                    // for the yellow turn //
    else if(turn == 'y'){
            if(name  == 'r_1'){
                document.getElementById(red_behind[0]).appendChild(btn_r_1)
                red_move[0] = 0
                red_iteam.push('r_1')
            }
            else if(name  == 'r_2'){
                document.getElementById(red_behind[1]).appendChild(btn_r_2)
                red_move[1] = 0
                red_iteam.push('r_2')
            }
            else if(name  == 'r_3'){
                document.getElementById(red_behind[2]).appendChild(btn_r_3)
                red_move[2] = 0
                red_iteam.push('r_3')
            }
            else if(name  == 'r_4'){
                document.getElementById(red_behind[3]).appendChild(btn_r_4)
                red_move[3] = 0
                red_iteam.push('r_4')
            }
            else if(name  == 'b_1'){
                document.getElementById(bleu_behind[0]).appendChild(btn_b_1)
                bleu_move[0] = 0
                bleu_iteam.push('b_1')
            }
            else if(name  == 'b_2'){
                document.getElementById(bleu_behind[1]).appendChild(btn_b_2)
                bleu_move[1] = 0
                bleu_iteam.push('b_2')
            }
            else if(name  == 'b_3'){
                document.getElementById(bleu_behind[2]).appendChild(btn_b_3)
                bleu_move[2] = 0
                bleu_iteam.push('b_3')
            }
            else if(name  == 'b_4'){
                document.getElementById(bleu_behind[3]).appendChild(btn_b_4)
                bleu_move[3] = 0
                bleu_iteam.push('b_4')
            }
            else if(name  == 'g_1'){
                document.getElementById(green_behind[0]).appendChild(btn_g_1)
                green_move[0] = 0
                green_iteam.push('g_1')
            }
            else if(name  == 'g_2'){
                document.getElementById(green_behind[1]).appendChild(btn_g_2)
                green_move[1] = 0
                green_iteam.push('g_2')
            }
            else if(name  == 'g_3'){
                document.getElementById(green_behind[2]).appendChild(btn_g_3)
                green_move[2] = 0
                green_iteam.push('g_3')
            }
            else if(name  == 'g_4'){
                document.getElementById(green_behind[3]).appendChild(btn_g_4)
                green_move[3] = 0
                green_iteam.push('g_4')
            }  
    }
                            // for the green turn //
    else if(turn == 'g'){
            if(name  == 'r_1'){
                document.getElementById(red_behind[0]).appendChild(btn_r_1)
                red_move[0] = 0
                red_iteam.push('r_1')
            }
            else if(name  == 'r_2'){
                document.getElementById(red_behind[1]).appendChild(btn_r_2)
                red_move[1] = 0
                red_iteam.push('r_2')
            }
            else if(name  == 'r_3'){
                document.getElementById(red_behind[2]).appendChild(btn_r_3)
                red_move[2] = 0
                red_iteam.push('r_3')
            }
            else if(name  == 'r_4'){
                document.getElementById(red_behind[3]).appendChild(btn_r_4)
                red_move[3] = 0
                red_iteam.push('r_4')
            }
            else if(name  == 'b_1'){
                document.getElementById(bleu_behind[0]).appendChild(btn_b_1)
                bleu_move[0] = 0
                bleu_iteam.push('b_1')
            }
            else if(name  == 'b_2'){
                document.getElementById(bleu_behind[1]).appendChild(btn_b_2)
                bleu_move[1] = 0
                bleu_iteam.push('b_2')
            }
            else if(name  == 'b_3'){
                document.getElementById(bleu_behind[2]).appendChild(btn_b_3)
                bleu_move[2] = 0
                bleu_iteam.push('b_3')
            }
            else if(name  == 'b_4'){
                document.getElementById(bleu_behind[3]).appendChild(btn_b_4)
                bleu_move[3] = 0
                bleu_iteam.push('b_4')
            }
            else if(name  == 'y_1'){
                document.getElementById(yellow_behind[0]).appendChild(btn_y_1)
                yellow_move[0] = 0
                yellow_iteam.push('y_1')
            }
            else if(name  == 'y_2'){
                document.getElementById(yellow_behind[1]).appendChild(btn_y_2)
                yellow_move[1] = 0
                yellow_iteam.push('y_2')
            }
            else if(name  == 'y_3'){
                document.getElementById(yellow_behind[2]).appendChild(btn_y_3)
                yellow_move[2] = 0
                yellow_iteam.push('y_3')
            }
            else if(name  == 'y_4'){
                document.getElementById(yellow_behind[3]).appendChild(btn_y_4)
                yellow_move[3] = 0
                yellow_iteam.push('y_4')
            }
    }
    killedsound.play()
}
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