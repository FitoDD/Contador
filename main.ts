var num = 0;
const aumentar = document.getElementById("BotAumentar");
const BotDisminuir = document.getElementById("BotDisminuir");
const BotResetear = document.getElementById("BotReset");
var counter: HTMLElement  = document.getElementById('contador');

 aumentar.addEventListener('click', () => {
    num = num + 1;
    colorCounter();
    counter.innerText = num.toString();
  })

  BotDisminuir.addEventListener('click', () => {
    num = num - 1;
    colorCounter();
    counter.innerText = num.toString();
  })

  BotResetear.addEventListener('click', () => {
    num = 0;
     colorCounter();
     counter.innerText = num.toString();
  })

function colorCounter () {
    if (num > 0){
        counter.style.color = '#00ff00';
    }
    if (num < 0){
        counter.style.color = '#FF0000';
    }
    if (num == 0){
        counter.style.color = '#000000';
    }
}