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
  const header = '<h1>No results</h1>'
  const message = '<h2 class="sorry">Try adjusting your search. Here are some ideas:</h2>';
  const tip1 = '<li>Change your price type or price range.</li>';
  const tip2 = '<li>Zoom out on the map.</li>';
  const tip3 = '<li>Search for a specific city, address, or landmark.</li>';
  const suggestions = `<ul>${tip1}${tip2}${tip3}</ul>`;
  if (loader) loader.innerHTML = `${header}${message}${suggestions}`;
};

export const removeEmptyMessage = () => {
  const loader = $(".empty-message")[0];
  if (loader) loader.innerHTML = "";
};
