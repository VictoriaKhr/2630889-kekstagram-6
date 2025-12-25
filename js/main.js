
import { photos } from './data.js';
import { renderPictures } from './rendering.js';
import { initFullscreen } from './fullscreen.js';
import { initForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPictures();
  initFullscreen();
  initForm();
});

export { photos, renderPictures };
