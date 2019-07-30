'use strict';

const main = () => {
  const favoritesForm = document.querySelectorAll('.favorites-form');
  // for each
  favoritesForm.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(event);
    // axios.post('/api/user/profile', {});
    // nos faltará togglear la clase star-filled para el botón '.favorites-btn', y así cambiar el backgrpund del botón con la estrella "llena"
  });
};

window.addEventListener('load', main);
