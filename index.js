var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var imgSource1 = "./images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource1) ;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var imgSource2 = "./images/" + randomDiceImage; 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSource2);

var playerWin = document.querySelector("h1");
isWin();

function isWin(){
    if(randomNumber1 === randomNumber2){
     playerWin.innerHTML = "Draw!";
    }else if(randomNumber1 > randomNumber2){
        playerWin.innerHTML = "Player 1 Win";
    }else if(randomNumber2 > randomNumber1){
        playerWin.innerHTML = "Player 2 Win";
    }
}



