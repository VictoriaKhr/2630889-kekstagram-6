
import { renderPictures } from './rendering.js';
import { initFullscreen, setPhotos } from './fullscreen.js';
import { initForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

initForm();
initFullscreen();

getData()
  .then((pictures) => {
    renderPictures(pictures);
    setPhotos(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

export { renderPictures };
