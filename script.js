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
        text.src = "проснулся.png";
        fon.src = "";
        cat.src = "кот_довольный.png";
       }

   // if (click == 4) {
     //   text.src = "разбуди.png";
    //    fon.src = "";
   //     click = 0;
   // }
}