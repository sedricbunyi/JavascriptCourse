var sumNumber = 0;
var result = "";

function checkNumber(){
    if(sumNumber < 21){
        result = "Another card?";
    }
    else if (sumNumber == 21){
        result = "YOU GOT BLACKJACK!";
        document.getElementById("result").style.color = "yellow";
        document.getElementById("hit").setAttribute("disabled", "true");

    }
    else if (sumNumber > 21){
        result = "BUST! You lose";
        document.getElementById("result").style.color = "red";
        document.getElementById("hit").setAttribute("disabled", "true");

    }
    document.getElementById("result").innerHTML = result;
}

function start(){
    for (let el of document.getElementsByClassName('start')) el.style.display = 'none';
    for (let el of document.getElementsByClassName('game')) el.style.display = 'block';

    let cardNumber1 = Math.floor((Math.random() * 11) + 2);
    let cardNumber2 = Math.floor((Math.random() * 11) + 2);

    document.getElementById("cards").innerHTML += "<span>" + cardNumber1 + "</span>";
    document.getElementById("cards").innerHTML += "<span>" + cardNumber2 + "</span>";

    sumNumber = cardNumber1 + cardNumber2;
    checkNumber();

}

function hit(){
    let cardNumber = Math.floor((Math.random() * 11) + 2);
    document.getElementById("cards").innerHTML += "<span>" + cardNumber + "</span>";
    sumNumber += cardNumber;
    document.getElementById("hit").setAttribute("disabled", "true");
    if(sumNumber < 21){
        result = "Total: " + sumNumber;
    }
    else if (sumNumber == 21){
        result = "YOU GOT BLACKJACK!";
        document.getElementById("result").style.color = "yellow";
    }
    else if (sumNumber > 21){
        result = "BUST! You lose";
        document.getElementById("result").style.color = "red";
    }
    document.getElementById("result").innerHTML = result;
}

