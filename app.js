import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const hra = document.querySelector('.hra');
const policka = hra.querySelectorAll('.policko');
const vysledek = hra.querySelector('.vysledek');

const polickaArray = Array.from(policka);

const herniPole = polickaArray.map(policko => {
  if (policko.classList.contains('kolecko')) {
    return 'o';
  } else if (policko.classList.contains('krizek')) {
    return 'x';
  } else {
    return '_';
  }
});

const vitez = findWinner(herniPole);

if (vitez === 'o') {
  vysledek.textContent = 'Vyhrál hráč se symbolem o.';
} else if (vitez === 'x') {
  vysledek.textContent = 'Vyhrál hráč se symbolem x.';
} else if (vitez === 'tie') {
  vysledek.textContent = 'Hra skončila nerozhodně.';
} else {
  vysledek.textContent = 'Výsledek je zatím neznámý.';
}
