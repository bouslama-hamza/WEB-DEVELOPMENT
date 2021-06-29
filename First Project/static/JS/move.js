                                    // for the first player //
//the rooler//
let rool_r_1 = document.getElementById("rool_r_1")
// the player iteams //
let btn_r_1 = document.getElementById("btn_r_1")
let btn_r_2 = document.getElementById("btn_r_2")
let btn_r_3 = document.getElementById("btn_r_3")
let btn_r_4 = document.getElementById("btn_r_4")
// for the first position //
let p_r_1 = document.getElementById(`p_60`)
                                    // for the second player //
// the rooler //
let rool_b_1 = document.getElementById("rool_b_1")
// the player iteams //
let btn_b_1 = document.getElementById("btn_b_1")
let btn_b_2 = document.getElementById("btn_b_2")
let btn_b_3 = document.getElementById("btn_b_3")
let btn_b_4 = document.getElementById("btn_b_4")
// for the first position //
let p_b_1 = document.getElementById(`p_15`)
                                    // for the therd player //
// the rooler //
let rool_y_1 = document.getElementById("rool_y_1")
// ther player iteams //
let btn_y_1 = document.getElementById("btn_y_1")
let btn_y_2 = document.getElementById("btn_y_2")
let btn_y_3 = document.getElementById("btn_y_3")
let btn_y_4 = document.getElementById("btn_y_4")
// for the first position //
let p_y_1 = document.getElementById(`p_30`)

                                     // for the fourd player //
// the rooler //
let rool_g_1 = document.getElementById("rool_g_1")
// ther player iteams //
let btn_g_1 = document.getElementById("btn_g_1")
let btn_g_2 = document.getElementById("btn_g_2")
let btn_g_3 = document.getElementById("btn_g_3")
let btn_g_4 = document.getElementById("btn_g_4")
// for the first position //
let p_g_1 = document.getElementById(`p_45`)
                                    // for sounds //
let dicesound = document.getElementById("dice_song")
let inoutsound = document.getElementById("inout_song")
let killedsound = document.getElementById("kille_song")
let stepsound = document.getElementById("step_song")
let winsound = document.getElementById("win_song")
                                    // let play //
let number_of_iteams = 12
let red_iteam = 4
let green_iteam = 4
let bleu_iteam = 4
let yellow_iteam = 4

document.addEventListener('click', ()=>{
    let turn = 1   
    if(turn == 1){
        hide_button('r')
        rool('r')
        turn +=1
    }
    else if(turn == 2){
        rool('b')
        turn -= 1
    }
})












function rool(n){
    dicesound.play()
        let y = Math.floor((Math.random()*6)+1)
        document.getElementById(`rool_${n}`).src = `static/images/dice-${y}.png`
    return y
}

                            // hidden button depend on turn //
function hide_button(x){
    if(x == 'r'){
        document.getElementById(`rool_b_1`).style.display = 'none'
        document.getElementById(`rool_g_1`).style.display = 'none'
        document.getElementById(`rool_y_1`).style.display = 'none'
        document.getElementById(`rool_r_1`).style.display = 'visible'
    }
    else if(x == 'b'){
        document.getElementById(`rool_r_1`).style.display = 'none'
        document.getElementById(`rool_g_1`).style.display = 'none'
        document.getElementById(`rool_y_1`).style.display = 'none'
        document.getElementById(`rool_b_1`).style.display = 'visible'
    }
    else if( x == 'y'){
        document.getElementById(`rool_r_1`).style.display = 'none'
        document.getElementById(`rool_g_1`).style.display = 'none'
        document.getElementById(`rool_b_1`).style.display = 'none'
        document.getElementById(`rool_y_1`).style.display = 'visible'
    }
    else if( x == 'g'){
        document.getElementById(`rool_r_1`).style.display = 'none'
        document.getElementById(`rool_y_1`).style.display = 'none'
        document.getElementById(`rool_b_1`).style.display = 'none'
        document.getElementById(`rool_g_1`).style.display = 'visible'
    }
}