// controllo js
console.log(`JS OK`)

// prendo gli elementi dal DOM
const button = document.querySelector(`button`);
console.log(button);

const timerElement = document.getElementById(`timer`);
console.log(timerElement);

const numbersElement = document.getElementById(`numbers`);
console.log(numbersElement);

// bottone in ascolto
button.addEventListener(`click` , function(){
    // variabile con array e numeri randomici
    const randomArr = Array.from({length: 10}, () => Math.floor(Math.random() * 10))
    console.log(randomArr)
})