/* eslint-disable no-param-reassign */
export {};

const investValues = ['550', '975', '1300'];
const incomeValues = ['422 000', '527 500', '660 000'];
const resultValues = ['60 000', '75 000', '95 000'];

const pointsRange = document.querySelector(
  '.js-points-range',
) as HTMLInputElement;

const investLabelEl = document.querySelector('.js-invest-result') as HTMLDivElement;
const incomeLabelEl = document.querySelector('.js-income-result') as HTMLDivElement;
const resultLabelEl = document.querySelector('.js-calc-result') as HTMLDivElement;

let pointsCurrentStep = 1;

const pointsInputDots = [...document.querySelectorAll('.js-points-input-dots .calc__input-dot')];
const pointsLabels = [...document.querySelectorAll('.js-points-labels .calc__label')];

pointsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  pointsInputDots[pointsCurrentStep].classList.remove('calc__input-dot_active');
  pointsLabels[pointsCurrentStep].classList.remove('calc__label_active');

  pointsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  pointsInputDots[pointsCurrentStep].classList.add('calc__input-dot_active');
  pointsLabels[pointsCurrentStep].classList.add('calc__label_active');

  investLabelEl.textContent = investValues[pointsCurrentStep];
  incomeLabelEl.textContent = incomeValues[pointsCurrentStep];
  resultLabelEl.textContent = resultValues[pointsCurrentStep];
});
