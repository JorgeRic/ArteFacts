'use strict';

const main = () => {
//   const favoritesForm = document.querySelectorAll('.favorites-form');
//   // for each
//   favoritesForm.addEventListener('click', async (event) => {
//     event.preventDefault();
//     console.log(event);
//     // axios.post('/api/user/profile', {});
//     // nos faltará togglear la clase star-filled para el botón '.favorites-btn', y así cambiar el backgrpund del botón con la estrella "llena"
//   });
// };

  // var $aDiv = $('#a-div');
  // var $bDiv = $('#b-div');
  // var $aBtn = $('#a');
  // var $bBtn = $('#b');

  // $aDiv.show();
  // $bDiv.hide();

  // $aBtn.click(function () {
  //   $aDiv.toggle(500, function () {
  //     if ($aDiv.is('disabled')) { $bBtn.prop('disabled', true); } else { $bBtn.prop('disabled', false); }
  //   });
  // });

  // $bBtn.click(function () {
  //   $bDiv.toggle(500, function () {
  //     if ($bDiv === $bDiv.show()) {
  //       $aDiv.hide();
  //     }
  //     if ($bDiv.is('disabled')) { $aBtn.prop('disabled', true); } else { $aBtn.prop('disabled', false); }
  //   });
  // });

  const buttonA = document.querySelector('#a');
  const buttonB = document.querySelector('#b');
  const myFavorites = document.querySelector('.favorite-list');
  const myArt = document.querySelector('.created-art-list');

  const buttonToogle = (mybtn, section, section2) => {
    mybtn.addEventListener('click', (e) => {
      if (section.classList.contains('visible') && section2.classList.contains('hidden')) {
        section.classList.remove('visible');
        section.classList.add('hidden');
        section2.classList.remove('hidden');
        section2.classList.add('visible');
      } else {
        section.classList.remove('hidden');
        section.classList.add('visible');
        section2.classList.remove('visible');
        section2.classList.add('hidden');
      }
    });
  };
  buttonToogle(buttonB, myFavorites, myArt);
  buttonToogle(buttonA, myArt, myFavorites);
};
window.addEventListener('load', main);
