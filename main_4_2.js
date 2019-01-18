var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var first,
    second,
    winner;
    

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function runGame() {

    first = getPlayerResult();
    second = getPlayerResult();

    player1.innerHTML = getNameById(first);
    player2.innerHTML = getNameById(second);

    determineWinner(first, second);
    printResult(determineWinner(first, second));
}

function getNameById(param) {
    let hand;
    switch (param) {
        case 1:
            hand = "Камень";
            break;
        case 2:
            hand = "Ножницы";
            break;
        case 3:
            hand = "Бумага";
            break;
    }
    return hand;
}

function determineWinner(first, second) {
    let winner;
    if (first === second) {
        winner = "<b>НИЧЬЯ</b>";
    } else if ((first === 1 && second === 2) ||
        (first === 2 && second === 3) ||
        (first === 3 && second === 1)) {
        winner = "Победил : <b>ПЕРВЫЙ</b> игрок";
    } else {
        winner = "Победил : <b>ВТОРОЙ</b> игрок";
    }
    return winner;
}

function printResult(param) {
    document.getElementById("result").innerHTML = param;
}





btn.addEventListener("click", runGame);