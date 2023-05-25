//Вибираємо в документі елементи кнопок
const startChangeBgc = document.querySelector('button[data-start]');
const stopChangeBgc = document.querySelector('button[data-stop]');
stopChangeBgc.disabled = true;

//Виставляємо початкове значення інтервала
let timerId = null;

//Добавляємо слухач на Start і виставляєм інтервал перемикання кольору фону
startChangeBgc.addEventListener('click', function(){
    startChangeBgc.disabled = true;
    stopChangeBgc.disabled = false;
    const getRandomHexColor = function () {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }; 
      timerId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
      return timerId;
});

//Добавляємо слухач на Stop і забираємо інтервал перемикання кольору фону
stopChangeBgc.addEventListener('click', () => {
    startChangeBgc.disabled = false;
    stopChangeBgc.disabled = true;
    clearInterval(timerId)});

//Стилізація кнопки Start (хоча навряд чи так хтось робить)
startChangeBgc.style.position = 'absolute';
startChangeBgc.style.top = '50%';
startChangeBgc.style.left = '41%';
startChangeBgc.style.width = '100px';
startChangeBgc.style.height = '50px';
startChangeBgc.style.backgroundColor = 'lightblue';

//Стилізація кнопки Stop (хоча навряд чи так хтось робить)
stopChangeBgc.style.position = 'absolute';
stopChangeBgc.style.top = '50%';
stopChangeBgc.style.left = '51%';
stopChangeBgc.style.width = '100px';
stopChangeBgc.style.height = '50px';
stopChangeBgc.style.backgroundColor = 'lightblue';


