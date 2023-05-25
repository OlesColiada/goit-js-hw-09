import Notiflix from 'notiflix';
const amountField = document.querySelector('input[name="amount"]');
const stepField = document.querySelector('input[name="step"]');
const delayField = document.querySelector('input[name="delay"]');
const submitBtn = document.querySelector('form');

submitBtn.addEventListener('submit', (e)=>{
  e.preventDefault();
  const amount = parseInt(amountField.value);
  const step = parseInt(stepField.value);
  let delay = parseInt(delayField.value);
  
  for(let i=1; i<= amount; i += 1){
    let position = i; 
      createPromise(position, delay)
        .then(({ position, delay }) => {Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)})
        .catch(({ position, delay }) => {Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)})
      delay += step;
    };
    amountField.value = '';
    stepField.value = '';
    delayField.value = '';
  }
)

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if (shouldResolve) {resolve({position, delay});
        } else {reject({position, delay});
      }}, delay); 
    })
  }