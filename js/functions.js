// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Функция для проверки палиндрома
function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replaceAll(' ', '');

  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  return normalizedStr === reversedStr;
}
