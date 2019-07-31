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

  var $aDiv = $('#a-div');
  var $bDiv = $('#b-div');
  var $aBtn = $('#a');
  var $bBtn = $('#b');

  $aDiv.hide();
  $bDiv.hide();

  $aBtn.click(function () {
    $aDiv.toggle(500, function () {
      if ($aDiv.is(':visible')) { $bBtn.prop('disabled', true); } else { $bBtn.prop('disabled', false); }
    });
  });

  $bBtn.click(function () {
    $bDiv.toggle(500, function () {
      if ($bDiv.is(':visible')) { $aBtn.prop('disabled', true); } else { $aBtn.prop('disabled', false); }
    });
  });
};
window.addEventListener('load', main);
