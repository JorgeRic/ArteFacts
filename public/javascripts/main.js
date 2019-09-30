'use strict';

const main = () => {
  const buttonA = document.querySelector('#a');
  const buttonB = document.querySelector('#b');
  const myFavorites = document.querySelector('.favorite-list');
  const myArt = document.querySelector('.created-art-list');

  const buttonToogle = (mybtn, section, section2) => {
    mybtn.addEventListener('click', (e) => {
      if (section.classList.contains('hidden') && section2.classList.contains('visible')) {
        section.classList.remove('visible');
        section.classList.add('hidden');
        section2.classList.remove('hidden');
        section2.classList.add('visible');
      } else {
        section2.classList.remove('hidden');
        section2.classList.add('visible');
        section.classList.remove('visible');
        section.classList.add('hidden');
      }

      if (buttonA.classList.contains('highlighted')) {
        buttonA.classList.remove('highlighted');
        buttonB.classList.add('highlighted');
      } else if (buttonB.classList.contains('highlighted')) {
        buttonB.classList.remove('highlighted');
        buttonA.classList.add('highlighted');
      }
    });
  };
  buttonToogle(buttonB, myArt, myFavorites);
  buttonToogle(buttonA, myFavorites, myArt);
};
window.addEventListener('load', main);
