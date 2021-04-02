/* eslint-disable no-param-reassign */
export {};

const incomeRange = document.querySelector(
  '.js-income-range',
) as HTMLInputElement;
const pointsRange = document.querySelector(
  '.js-points-range',
) as HTMLInputElement;

const resultLabelElList = document.querySelectorAll('.js-calc-result');

let result: number;

let pointsCurrentStep = 1;
let incomeCurrentStep = 1;

const pointsInputDots = [...document.querySelectorAll('.js-points-input-dots .calc__input-dot')];
const pointsLabels = [...document.querySelectorAll('.js-points-labels .calc__label')];

const incomeInputDots = [...document.querySelectorAll('.js-income-input-dots .calc__input-dot')];
const incomeLabels = [...document.querySelectorAll('.js-income-labels .calc__label')];

const calcResult = () => {
  result = (Number(incomeRange.value) * 100000 * Number(pointsRange.value)) * 0.0007;
  resultLabelElList.forEach(el => {
    el.textContent = result.toLocaleString();
  });
};

calcResult();

pointsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  pointsInputDots[pointsCurrentStep].classList.remove('calc__input-dot_active');
  pointsLabels[pointsCurrentStep].classList.remove('calc__label_active');

  pointsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  pointsInputDots[pointsCurrentStep].classList.add('calc__input-dot_active');
  pointsLabels[pointsCurrentStep].classList.add('calc__label_active');

  calcResult();
});

incomeRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  incomeInputDots[incomeCurrentStep].classList.remove('calc__input-dot_active');
  incomeLabels[incomeCurrentStep].classList.remove('calc__label_active');

  incomeCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  incomeInputDots[incomeCurrentStep].classList.add('calc__input-dot_active');
  incomeLabels[incomeCurrentStep].classList.add('calc__label_active');

  calcResult();
});
