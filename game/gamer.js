let maxAttempt = 5;
let minAttempt = 1;
let minNumber = 1;
let maxNumber = 10;
let answer = [];
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) +  minNumber;
console.log(randomNumber);
let massiveAns = [];


let close = document.getElementById('exit');
let reset = document.getElementById('reset');

close.onclick = function closeWin () {
    let last = prompt("Please type + if u really want to close game!");
    if (last == '+') {
        window.close();
    }
}

reset.onclick = function resetPage () {
    window.location.reload();
}


let generate = document.getElementById('generate');

generate.onclick = function getNum () {
    let input = document.getElementById("input").value;
    input = parseInt(input);
    if (input == randomNumber) {
        alert("Ты выиграл/а! Твое число - " + randomNumber)
    }
    //first try
    else if (input > randomNumber && maxAttempt == 5) {
        maxAttempt--;
        alert('Холодно! Попробуй число по меньше! У тебя осталось'  + maxAttempt + " попытки!");
        answer.push(input);
    }else if (input < randomNumber && maxAttempt == 5) {
        maxAttempt--;
        alert('Холодно! Попробуй число по больше! У тебя осталось ' + maxAttempt + " попытки!");
        answer.push(input);
    }
    //second try
    // + +(+)
    else if (input > randomNumber && maxAttempt == 4 && answer[0] > randomNumber && answer[0] - randomNumber > input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + +(-)
    else if (input > randomNumber && maxAttempt == 4 && answer[0] > randomNumber && answer[0] - randomNumber < input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!")
    }
    // + - (+)
    else if(input < randomNumber && answer[0] > randomNumber && maxAttempt == 4 && answer[0] - randomNumber > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + - (-)
    else if(input < randomNumber && answer[0] > randomNumber && maxAttempt == 4 && answer[0] - randomNumber < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }


    // - - (+)
    else if (input < randomNumber && answer[0] < randomNumber && maxAttempt == 4 && randomNumber - answer[0] > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - -(-)
    else if(input < randomNumber && answer[0] < randomNumber && maxAttempt == 4 && randomNumber - answer[0] < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }
    //- + (+)
    else if(input > randomNumber && answer[0] < randomNumber && maxAttempt == 4 && input - randomNumber < randomNumber - answer[0]) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - + (-)
    else if (input > randomNumber && answer[0] < randomNumber && maxAttempt == 4 &&input - randomNumber > randomNumber - answer[0]) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }



    //third try


    // + +(+)
    else if (input > randomNumber && maxAttempt == 3 && answer[1] > randomNumber && answer[1] - randomNumber > input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + +(-)
    else if (input > randomNumber && maxAttempt == 3 && answer[1] > randomNumber && answer[1] - randomNumber < input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!")
    }
    // + - (+)
    else if(input < randomNumber && answer[1] > randomNumber && maxAttempt == 3 && answer[1] - randomNumber > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + - (-)
    else if(input < randomNumber && answer[1] > randomNumber && maxAttempt == 3 && answer[1] - randomNumber < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }


    // - - (+)
    else if (input < randomNumber && answer[1] < randomNumber && maxAttempt == 3 && randomNumber - answer[1] > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - -(-)
    else if(input < randomNumber && answer[1] < randomNumber && maxAttempt == 3 && randomNumber - answer[1] < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }
    //- + (+)
    else if(input > randomNumber && answer[1] < randomNumber && maxAttempt == 3 && input - randomNumber < randomNumber - answer[1]) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - + (-)
    else if (input > randomNumber && answer[1] < randomNumber && maxAttempt == 3 &&input - randomNumber > randomNumber - answer[1]) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }

    // fourth try

    // + +(+)
    else if (input > randomNumber && maxAttempt == 2 && answer[2] > randomNumber && answer[2] - randomNumber > input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + +(-)
    else if (input > randomNumber && maxAttempt == 2 && answer[2] > randomNumber && answer[2] - randomNumber < input - randomNumber) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!")
    }
    // + - (+)
    else if(input < randomNumber && answer[2] > randomNumber && maxAttempt == 2 && answer[2] - randomNumber > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // + - (-)
    else if(input < randomNumber && answer[2] > randomNumber && maxAttempt == 2 && answer[2] - randomNumber < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }


    // - - (+)
    else if (input < randomNumber && answer[2] < randomNumber && maxAttempt == 2 && randomNumber - answer[2] > randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - -(-)
    else if(input < randomNumber && answer[2] < randomNumber && maxAttempt == 2 && randomNumber - answer[2] < randomNumber - input) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по больше! У тебя осталось " + maxAttempt + " попытки!")
    }

    //- + (+)
    else if(input > randomNumber && answer[2] < randomNumber && maxAttempt == 2 && input - randomNumber < randomNumber - answer[2]) {
        maxAttempt--;
        answer.push(input);
        alert("Теплее! Но попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }
    // - + (-)
    else if (input > randomNumber && answer[2] < randomNumber && maxAttempt == 2 &&input - randomNumber > randomNumber - answer[2]) {
        maxAttempt--;
        answer.push(input);
        alert("Холоднее! Попробуй число по меньше! У тебя осталось " + maxAttempt + " попытки!");
    }

    //fifth try

    else if (maxAttempt <= 1 && input != randomNumber && typeof input == "number") {
        alert("Ты проиграл! Твое число" + randomNumber + ". Но не растраивайся, можешь сыграть еще раз!")
    }

    //
    let ansBut = document.getElementById('ansList');
    let tipBut = document.getElementById('tipBut');
    if (maxAttempt === 2) {
        ansBut.style.display = "inherit";
        tipBut.style.display = "inherit";
    }
    ansBut.onclick = function listOfAns () {
        ansBut.onclick = alert("История твоих ответов: \n" + answer )
    }
    
    tipBut.onclick = function showTip () {
        if(randomNumber > 0 && randomNumber <= 10) {
            alert("Ваше число находится между - 0 и 10")
        }else if(randomNumber > 10 && randomNumber <= 20) {
            alert("Ваше число находится между - 10 и 20")
        }else if(randomNumber > 20 && randomNumber <= 30) {
            alert("Ваше число находится между - 20 и 30")
        }else if(randomNumber > 30 && randomNumber <= 40) {
            alert("Ваше число находится между - 30 и 40")
        }else if(randomNumber > 40 && randomNumber <= 50) {
            alert("Ваше число находится между - 40 и 50")
        }else if(randomNumber > 50 && randomNumber <= 60) {
            alert("Ваше число находится между - 50 и 60")
        }else if(randomNumber > 60 && randomNumber <= 70) {
            alert("Ваше число находится между - 60 и 70")
        }else if(randomNumber > 70 && randomNumber <= 80) {
            alert("Ваше число находится между - 70 и 80")
        }else if(randomNumber > 80 && randomNumber <= 90) {
            alert("Ваше число находится между - 80 и 90")
        }else if(randomNumber > 90 && randomNumber <= 100) {
            alert("Ваше число находится между - 90 и 100")
        }
    }
}