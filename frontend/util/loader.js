import $ from 'jquery';
import IMAGES from './images';

export const addSpinner = () => {
  removeEmptyMessage();
  $('.spot-index-container').css({ opacity: '0.3' });
  $('#spot-modal').css({ display: 'block' });
  const loader = $(".load-message")[0];
  if (loader) loader.innerHTML = '<div class="loader">Loading...</div>';
};

export const removeSpinner = () => {
  const loader = $(".load-message")[0];
  $('#spot-modal').css({ display: 'none' });
  $('.spot-index-container').css({ opacity: '1' });
  if (loader) loader.innerHTML = "";
};

export const addEmptyMessage = () => {
  const loader = $(".empty-message")[0];
  const message = '<h2 class="sorry">Sorry, no spots were found here.</h2>';
  const sadface = `<img src='${IMAGES.sadface}'/>`;
  if (loader) loader.innerHTML = `${message}${sadface}`;
};

export const removeEmptyMessage = () => {
  const loader = $(".empty-message")[0];
  if (loader) loader.innerHTML = "";
};
