document.querySelector(".check").addEventListener("click",check);
const randomNumber = Math.floor(Math.random() * 20)+1;
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

// when the guess is correct
function check(){
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

     }
}