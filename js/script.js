// controllo js
console.log(`JS OK`)

// prendo gli elementi dal DOM
const button = document.querySelector(`button`);
console.log(button);

const timerElement = document.getElementById(`timer`);
console.log(timerElement);

const numbersElement = document.getElementById(`numbers`);
console.log(numbersElement);

const resultElement = document.getElementById(`result`);
console.log(resultElement);

// bottone in ascolto
button.addEventListener(`click` , function(){

    // array con numeri randomici
    let max = 1
    let min = 50
    const randomArr = Array.from({length: 5}, () => Math.floor(Math.random() * (max - min) + min));
    console.log(randomArr);

    // array con le risposte giuste
    const arrayRight = [];

    // stampa arrow nel DOM
    numbersElement.innerHTML = randomArr;
    
    // timer di 30 secondi
    let timer = setInterval(function(){ myTimer() }, 1000);
    let secondlimit = 30;
    
    // funzione timer
    function myTimer() {
        
        // stampa timer nel DOM
        document.getElementById("timer").innerHTML = --secondlimit;
        
        // controllo del timer   
        if(secondlimit < 2 ){
            numbersElement.classList.add(`d-none`);
            console.log(numbersElement);
        }
        
        if(secondlimit === 0){
            
            // promp di risposta
            let userAnswer;

            console.log(userAnswer)
            
            // array utente
            const userArr = []
            // messaggio vincitore
            let message;
            
            //ciclo per in prompt
            for(let i = 0; i < 5; i++){
                
                // messaggio per l'utente
                userAnswer = parseInt(prompt(`Scegli un numero da 1 a 50`));
                userArr.push(userAnswer)
                
                // controllo array risposte giuste
                for(let i = 0; i < userArr.length; i++){
                    if(randomArr.includes(userArr[i]) && !arrayRight.includes(userArr[i]) ){
                        arrayRight.push(userArr[i]);
                    }
                };
                console.log(arrayRight + "arrayRight")
                // controllo vincitore
                if(arrayRight.length === randomArr.length){
                    message = `"HAI VINTO" il tuo punteggio è : ${arrayRight.length} - Numeri: ${arrayRight}`;
                }else if(arrayRight.length === 0){
                    message = `"HAI PERSO" il tuo punteggio è : ${arrayRight.length}`;
                }else{
                    message = `"CI SEI QUASI" il tuo punteggio è : ${arrayRight.length} - Numeri: ${arrayRight}`;
                }
                console.log(userArr + `userArr`)
            };
            
            // timer stop
            clearInterval(timer);
            resultElement.innerHTML = message;
        }
    };
}
)