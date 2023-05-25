//Import Flatpickr framework and css
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

//Назначаємо константи і стан кнопки Start
const startBtn = document.querySelector('button[data-start]');
const inputtedDate = document.querySelector('#datetime-picker');
const currentDate = new Date();

const dayField = document.querySelector('span[data-days]');
const hourField = document.querySelector('span[data-hours]');
const minutField = document.querySelector('span[data-minutes]');
const secondField = document.querySelector('span[data-seconds]');

startBtn.disabled = true;
inputtedDate.disabled = false;

//Function conversation
const convertMs = function (ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day).toString().padStart(2, '0');;
  dayField.textContent = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour).toString().padStart(2, '0');;
  hourField.textContent = hours
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute).toString().padStart(2, '0');;
  minutField.textContent = minutes;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second).toString().padStart(2, '0');;
  secondField.textContent = seconds;
  return { days, hours, minutes, seconds };
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selDate = selectedDates[0];
        if(selDate <= currentDate){return Notiflix.Notify.failure("Please choose a date in the future");}
        const msDate = selDate - currentDate;
        convertMs(msDate);
        startBtn.disabled = false;
    },
};
flatpickr('input#datetime-picker', options);

startBtn.addEventListener('click', ()=>{
    startBtn.disabled = true;
    inputtedDate.disabled = true;

    let timerId = parseInt(secondField.textContent)*1000 + parseInt(minutField.textContent)*1000*60 + parseInt(hourField.textContent)*1000*60*60 + parseInt(dayField.textContent)*1000*60*60*24;
    
    setInterval(()=>{
        if(timerId >= 1000){timerId -= 1000;
        convertMs(timerId)} else {inputtedDate.disabled = false;}
    }, 1000);
    // 
})
