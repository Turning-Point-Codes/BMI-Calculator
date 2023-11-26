const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calButton = document.querySelector('.calculate');
const resetButton = document.querySelector('.reset');
const errorEl = document.querySelector('.error');
const resultEl = document.querySelector('#bmi');
const statusEl = document.querySelector('.comment');

calButton.addEventListener('click', (e) => {
  e.preventDefault();
  const heightValue = height.value;
  const weightValue = weight.value;
  if (!heightValue || !weightValue) {
    errorEl.textContent = 'Please enter your height and weight';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
    return;
  }
  if (!Number(heightValue) || !Number(weightValue)) {
    errorEl.textContent = 'Please enter a valid number';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
    return;
  }
  let bmi = weightValue / (heightValue / 100) ** 2;
  bmi = bmi.toFixed(2);
  resultEl.textContent = bmi;
  let status = '';
  if (bmi < 18.5) {
    statusEl.textContent = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusEl.textContent = 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    statusEl.textContent = 'Overweight';
  } else if (bmi >= 30) {
    statusEl.textContent = 'Obese';
  }
});

const resetBtn = () => {
  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    height.value = '';
    weight.value = '';
    resultEl.textContent = '';
    resultEl.textContent = '0.00';
  });
};
resetBtn();
