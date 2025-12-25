import { renderPictures } from './rendering.js';
import { debounce } from './util.js';

const RANDOM_PICTURES_COUNT = 10;
const RERENDER_DELAY = 500;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filtersElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, RANDOM_PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const debouncedRenderPictures = debounce(
  (filteredPictures) => renderPictures(filteredPictures),
  RERENDER_DELAY
);

const onFilterClick = (evt) => {
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  }

  const clickedButton = evt.target;
  if (clickedButton.id === currentFilter) {
    return;
  }

  filtersElement
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  clickedButton.classList.add('img-filters__button--active');
  currentFilter = clickedButton.id;
  debouncedRenderPictures(getFilteredPictures());
};

const initFilter = (loadedPictures) => {
  pictures = [...loadedPictures];
  filtersElement.classList.remove('img-filters--inactive');
  filtersElement.addEventListener('click', onFilterClick);
};

export { initFilter };
