// Plik: index.js
const randomUtils = require('./randomUtils');

// Wywolanie funkcji getRandomInt
const randomInt = randomUtils.getRandomInt(1, 10);
console.log('Losowa liczba całkowita:', randomInt);

// Wywolanie funkcji getRandomAlphanumericString
const randomString = randomUtils.getRandomAlphanumericString(8);
console.log('Losowy ciąg znaków alfanumerycznych:', randomString);

// Wywolanie funkcji getRandomIntArray
const randomArray = randomUtils.getRandomIntArray(1, 100, 5);
console.log('Losowa tablica liczb całkowitych:', randomArray);
