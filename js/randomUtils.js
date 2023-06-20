// Plik: randomUtils.js
const randomUtils = {
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRandomAlphanumericString: function (length) {
    const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
      result += alphanumericCharacters.charAt(randomIndex);
    }
    return result;
  },

  getRandomIntArray: function (min, max, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(this.getRandomInt(min, max));
    }
    return result;
  }
};

module.exports = randomUtils;
