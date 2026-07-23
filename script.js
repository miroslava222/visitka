//const cat = document.getElementById("cat_sleep");

//cat.onclick = function() {
    //cat.src = "кот_довольный.png";
//}; тест кота
let cat = document.getElementById("cat_sleep");
let text = document.getElementById("text1");
let fon = document.getElementById("fon");

let click = 0;

cat.onclick = function () {

    click++;

    if (click == 1) {
        text.src = "настойчиво.png";
        fon.src = "пфмяу.png";
        fon.style.width = "150px";
    }

    if (click == 2) {
        text.src = "настойчиво.png";
        fon.src = "мяуладно.png";
    }

   if (click == 3) {
        text.src = "1.jpg";
        fon.src = "";
        cat.src = "кот_довольный.png";
       }

   if (click == 4) {
        text.src = "голодный.jpg";
        fon.src = "";
        cat.src = "кота_покормили.png";
    }
    if (click == 5) {
        text.src = "2.jpg";
        fon.src = "";
        cat.src = "ожирение1.png";
    }
    if (click == 6) {
        text.src = "нееет.jpg";
        fon.src = "";
        cat.src = "ожирение 2.png";
    }
    if (click == 7) {
        text.src = "";
        fon.src = "";
        cat.src = "кот_спит.png";
    }
}
let currentQuestion = 1;
let score = 0;

function startQuiz(){

    document.getElementById("start").style.display = "none";

    document.getElementById("q1").style.display = "block";

}

function nextQuestion1(){

    let answer = document.querySelector('input[name="q1"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q1").style.display = "none";

    currentQuestion++;

    document.getElementById("q2").style.display = "block";

}
function nextQuestion2(){

    let answer = document.querySelector('input[name="q2"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q2").style.display = "none";

    currentQuestion++;

    document.getElementById("q3").style.display = "block";

}
function nextQuestion3(){

    let answer = document.querySelector('input[name="q3"]:checked');

    if(answer){

        score += Number(answer.value);

    }
    document.getElementById("q3").style.display = "none";

    currentQuestion++;

    document.getElementById("q4").style.display = "block";

}
function nextQuestion4(){

    let answer = document.querySelector('input[name="q4"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q4").style.display = "none";

    currentQuestion++;

    document.getElementById("q5").style.display = "block";

}

function nextQuestion5(){

    let answer = document.querySelector('input[name="q5"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q5").style.display = "none";

    currentQuestion++;

    document.getElementById("q6").style.display = "block";

}
function nextQuestion6(){

    let answer = document.querySelector('input[name="q6"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q6").style.display = "none";

    currentQuestion++;

    document.getElementById("q7").style.display = "block";

}
function nextQuestion7(){

    let answer = document.querySelector('input[name="q7"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q7").style.display = "none";

    currentQuestion++;

    document.getElementById("q8").style.display = "block";

}
function nextQuestion8(){

    let answer = document.querySelector('input[name="q8"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q8").style.display = "none";

    currentQuestion++;

    document.getElementById("q9").style.display = "block";

}
function nextQuestion9(){

    let answer = document.querySelector('input[name="q9"]:checked');

    if(answer){

        score += Number(answer.value);

    }

    document.getElementById("q9").style.display = "none";

    currentQuestion++;

    document.getElementById("q10").style.display = "block";

}
function finishQuiz(){

    let answer = document.querySelector('input[name="q10"]:checked');

    if(answer){
        score += Number(answer.value);
    }

    document.getElementById("q10").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =
    "<h2>Твой результат: " + score + "/10</h2>";

}