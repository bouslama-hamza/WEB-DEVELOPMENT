let quotes_array = [

  "Push yourself, because no one else is going to do it for you.",

  "Failure is the condiment that gives success its flavor.",

  "Wake up with determination. Go to bed with satisfaction.",

  "It's going to be hard, but hard does not mean impossible.",

  "Learning never exhausts the mind.",

  "The only way to do great work is to love what you do."
];

const text = document.querySelector("#chalenge");

i = 0;

const starttime = document.querySelector("#watch");

let End = true;

let millisecound = 0;

let timer;

    function timeStart(){

        timer = setInterval(() => {

          millisecound += 10;

          starttime.innerHTML = 

          ('0'+new Date(millisecound).getUTCMinutes()).slice(-2) + ' : ' +
 
          ('0'+new Date(millisecound).getUTCSeconds()).slice(-2) + ' : ' +

          ('0'+new Date(millisecound).getUTCMilliseconds()).slice(-3,-1);}, 10);

    }

    function timeReset(){

        clearInterval(timer);

        setInterval(timer);

        millisecound = 0;

        starttime.innerHTML = '00 : 00 : 00'
    
    }
    function timeStop(){

        clearInterval(timer);

        setInterval(timer);

    
    }

        let textarea = document.querySelector("#write")

        textarea.addEventListener('keydown',() =>{

        timeStart();
        
    },{once:true});

        textarea.addEventListener('input' ,() => {
            
           const needword = text.querySelectorAll('span')

           const valueword = textarea.value.split('')

           needword.forEach((characterSpan,index) => {

            const character = valueword[index]

            if (character == null){
                
                characterSpan.classList.remove('correct')

                characterSpan.classList.remove('incorrect')

                End = false
                
            }

            else if ( character === characterSpan.innerText){

                textarea.classList.add('correct')

                textarea.classList.remove('incorrect')

                End = true
            }
            else{

                textarea.classList.remove('correct')

                textarea.classList.add('incorrect')

                End = false
            }

           })
           if  (End) {timeStop();}
        })

        

document.addEventListener('click' , t => {

    if (t.target.id === 'button') {

        timeReset();
        
        textarea.value = null;

        if (i == 5){i = 0}

        text.innerHTML = quotes_array[i];

        i = i + 1;

    }
    givadd()
});

async function givadd(){
    
const quote = quotes_array[i]

text.innerHTML = ''

quote.split('').forEach(character => {

    const characterSpan = document.createElement('span')

    characterSpan.innerText = character

    text.appendChild(characterSpan)
})

}
