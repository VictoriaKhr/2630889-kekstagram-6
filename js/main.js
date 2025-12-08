const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Мария', 'Дмитрий', 'Анна', 'Сергей',
  'Елена', 'Алексей', 'Ольга', 'Иван', 'Наталья',
  'Михаил', 'Татьяна', 'Андрей', 'Юлия', 'Павел',
  'Екатерина', 'Николай', 'Александра', 'Владимир', 'Светлана'
];

const DESCRIPTIONS = [
  'Закат на море',
  'Горный пейзаж',
  'Уличное кафе',
  'Летний день в парке',
  'Зимний лес',
  'Городская архитектура',
  'Цветущий сад',
  'Путешествие по стране',
  'Домашний питомец',
  'Вкусный ужин',
  'Спортивные достижения',
  'Творческая работа',
  'Семейный праздник',
  'Природа весной',
  'Ночной город',
  'Отдых на природе',
  'Интересная книга',
  'Музыкальный концерт',
  'Художественная выставка',
  'Научный эксперимент',
  'Кулинарный шедевр',
  'Спортивное мероприятие',
  'Историческое место',
  'Теплые воспоминания',
  'Новые впечатления'
];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  return Array.from({ length: commentsCount }, createComment);
};

const createPhoto = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index] || `Описание фотографии ${index + 1}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const generatePhotos = () =>
  Array.from({ length: 25 }, (_, index) => createPhoto(index));

const photos = generatePhotos();
