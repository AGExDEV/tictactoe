let firstPlayer = null;
let rand = null;
const flipDiv = document.getElementById("flipCoin");
const gameBoard = document.getElementById("gameBoard"); 
function flip(){
    rand = Math.random();
    console.log(rand);
    if(rand <= 0.5){
        firstPlayer = "Your turn human";
    }else{
        firstPlayer = "My turn";
    }
    console.log(firstPlayer);
    document.getElementById("msg").innerHTML= firstPlayer;
    setTimeout(function(){
        flipDiv.style.display = "none";
        gameBoard.style.display ="flex";
    }, 1000);
    setTimeout(function(){
        document.getElementById("msg").innerHTML= "";
    }, 3000);
    console.log(firstPlayer);
    if(firstPlayer=="My turn"){
        strike();
    }
}