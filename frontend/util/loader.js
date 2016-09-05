export const addSpinner = () => {
  removeEmptyMessage();
  const loader = $(".load-message")[0];
  loader.innerHTML = '<div class="loader">Loading...</div>';
};

export const removeSpinner = () => {
  const loader = $(".load-message")[0];
  loader.innerHTML = "";
};

export const addEmptyMessage = () => {
  const loader = $(".empty-message")[0];
  const message = '<h2 class="sorry">Sorry, no spots were found</h2>';
  const sadface = "<img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472793127/sad-face_vhh0oo.png'/>"
  loader.innerHTML = `${message}${sadface}`;
};

export const removeEmptyMessage = () => {
  const loader = $(".empty-message")[0];
  loader.innerHTML = "";
};
