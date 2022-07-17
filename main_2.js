var num = 0;
var botAumentar = document.getElementById("BotAumentar");
var botDisminuir = document.getElementById("BotDisminuir");
var botResetear = document.getElementById("BotReset");
var counter = document.getElementById('contador');
botAumentar.addEventListener('click', function () {
    num = num + 1;
    colorCounter();
    counter.innerText = num.toString();
});
botDisminuir.addEventListener('click', function () {
    num = num - 1;
    colorCounter();
    counter.innerText = num.toString();
});
botResetear.addEventListener('click', function () {
    num = 0;
    colorCounter();
    counter.innerText = num.toString();
});
function colorCounter() {
    if (num > 0) {
        counter.style.color = '#0ead1b';
    }
    if (num < 0) {
        counter.style.color = '#FE0000';
    }
    if (num == 0) {
        counter.style.color = '#000000';
    }
}
