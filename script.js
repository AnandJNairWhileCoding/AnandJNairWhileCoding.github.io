document.querySelector(".check").addEventListener("click",check);
document.querySelector(".replay").addEventListener("click",replay);

let randomNumber = Math.floor(Math.random() * 20)+1;
console.log(randomNumber)
console.log(document.querySelector("html"))

// element referencce
const display=document.querySelector(".display");
const container=document.querySelector(".container");
const button = document.getElementsByTagName("button");
const symbol = document.querySelector(".symbol");
const inner  = document.querySelector(".inner");
const high = document.querySelector(".high");
const headding = document.querySelector(".headding");
const symdis = document.querySelector(".symdis")
let highScore = 0;
let currentScore =20;


function check()
{
    // when the guess is correct
     const number =Number(document.querySelector(".number").value);
     if(number === randomNumber)
     {
         display.textContent = "You Won...!";
         array=document.querySelectorAll(".change")
         for (let index = 0; index < array.length; index++) 
         {
              array[index].style.color="rgb(34, 83, 6)";
         }
         container.style.backgroundImage = "linear-gradient(to bottom right,rgba(52, 233, 20, 0.87), rgba(134, 231, 147, 0.829)),url('image/image.jpg')"
         for (let index = 0; index < button.length; index++) 
         {
             button[index].style.backgroundColor = "rgb(188, 245, 171)";
         }
         symbol.style.backgroundColor = "rgba(77, 248, 9, 0.993)";
         inner.style.backgroundColor =  "rgba(196, 250, 160, 0.993)";
         high.style.color = "rgb(6, 92, 13)";
         headding.style.textShadow = "2px 2px 4px rgb(5, 51, 3)";
         headding.textContent = "Hurray...!";
         symdis.textContent = randomNumber;
         if (currentScore > highScore)
         {
             document.querySelector(".high").textContent = `High Score: ${currentScore}`;
             highScore = currentScore;
         }

     }


    //  when the guess is wrong 
    else
    {
        display.textContent = number > randomNumber ? 'Too High...!' : 'Too Low...!';
        currentScore--;

    }

}



function replay()
{
    display.textContent = "Start Guessing...!";
    array=document.querySelectorAll(".change")
    for (let index = 0; index < array.length; index++) 
    {
         array[index].style.color="rgb(177, 82, 4)";
    }
    container.style.backgroundImage = "linear-gradient(to bottom right,rgba(243, 146, 18, 0.87), rgba(231, 195, 134, 0.829)),url('image/image.jpg')"
    for (let index = 0; index < button.length; index++) 
    {
        button[index].style.backgroundColor = "rgb(245, 219, 171)";
    }
    symbol.style.backgroundColor = "rgba(248, 164, 9, 0.993)";
    inner.style.backgroundColor =  "rgba(250, 215, 160, 0.993)";
    high.style.color = "rgb(168, 79, 6)";
    headding.style.textShadow = "2px 2px 4px rgb(51, 30, 3)";
    headding.textContent = "Guess The Number...?";
    symdis.textContent = "?";
    randomNumber = Math.floor(Math.random() * 20)+1;
}