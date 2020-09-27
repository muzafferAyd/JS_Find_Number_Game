
/*
1) Arkaplanda random sayı tutulacak
2) Kullanıcıdan satı alınacak
3) Alınan sayı kontrol edilecek
        3.1 Sayı tahmını satıdan büyükse "sayı buyuk"
        3.2 Sayı tahmını satıdan kucükse "sayı kucuk"
        3.3 Sayı eşitse oyunu bitir

*/
let guess_count = 0;
let random_number = Math.floor(Math.random()*100+1);

console.log(random_number);

document.querySelector("#check_it").addEventListener("click",checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        checkNumber();
    }
});

function checkNumber (){
// Input elementine tekrar tekrar daha rahat erişim sağlamak için
    let userInput = document.querySelector("#nr_game");
    let answerlabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");


    if(userInput.value == random_number){
        alert("You are the winner! Guess: " + ++guess_count);

        const choice = confirm("Game again");

        if(choice){  
            guess_count= 0;
            random_number = Math.floor(Math.random()*100+1);
            answerlabelElement.innerText = "";      
        }else{
            alert("Thanks for playing!");
            answerlabelElement.innerText="Best guess time: "+guess_count;
            guessLabelElement.innerText="";
        }



    }else if (userInput.value==""){
        answerlabelElement.innerText ="Enter a Number";
    }
    else if (userInput.value > random_number){
        guess_count++;
        guessLabelElement.innerText =`Guess count is: ${guess_count}` ;
        answerlabelElement.innerText = "Try a smaller number!";
    }
    else if (userInput.value < random_number){
        guess_count++;
        guessLabelElement.innerText =`Guess count is: ${guess_count}` ;
        answerlabelElement.innerText = "Try a bigger number!";
    }
    else if (isNaN(userInput.value)){
        answerlabelElement.innerText ="It's not a number!";
    }
    userInput.focus();
    userInput.value="";


}

