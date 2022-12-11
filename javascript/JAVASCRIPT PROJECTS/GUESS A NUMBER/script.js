const guess = document.querySelector("#num");
const goBtn = document.querySelector("#button");
const result = document.querySelector("#result");
const tries = document.querySelector("#tries");
const toBeGuessedNum = Math.floor(Math.random()*10);
let totTries = 5;
let resText='';
goBtn.addEventListener("click",function(){

let num = +guess.value;
totTries--;
 if(num===toBeGuessedNum)
 resText = "Congrats you guessed the number🎉🎉";
 else if(totTries===0)
 resText= `You lost the game`;
 else if(num<toBeGuessedNum)
 resText=' Your guess is lower';
 else
 resText=' Your guess is higher';

 result.innerText=`Result : ${resText}`;
 if(totTries===0)
 {
    tries.style.color ="RED";
    tries.innerText ="< GAME OVER >";
    guess.setAttribute('disabled', '');
    goBtn.setAttribute('disabled','')
   
 }
else if(num===toBeGuessedNum){

    tries.innerText=`< SUCCESS >`;
    tries.style.color="green";
    guess.setAttribute('disabled', '');
    goBtn.setAttribute('disabled','')
 }
 else 
 {
    tries.innerText=`Tries left : ${totTries}`;
 }


})