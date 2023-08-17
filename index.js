function randomNumber(min, max) {
    min = 1, max = 6;
    return Math.ceil(Math.random() * (max - min) + min); 
}

const randomNumber1 = randomNumber();

const randomNumber2 = randomNumber();

const randomizerCube1 = document.querySelector("img.img1").src = "images/dice"+randomNumber1+".png";

const randomizerCube2 = document.querySelector("img.img2").src = "images/dice"+randomNumber2+".png";

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins!"; 
} else {
    document.querySelector("h1").innerHTML = "Player Two Wins!"; 
}
