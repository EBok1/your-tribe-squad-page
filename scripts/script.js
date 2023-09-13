var cardsArray1 = [];
var cardsArray2 = [];
var cardsArray3 = [];

window.onload = () => {
  // Initialize the card arrays on page load
  cardsArray1 = arrayFromList('.carousel-1 > li');
  cardsArray2 = arrayFromList('.carousel-2 > li');
  cardsArray3 = arrayFromList('.carousel-3 > li');

  // const spinButton = document.getElementById('button-spin');

  // spinButton.addEventListener('click', pickRandomCards(
  //   cardsArray1,
  //   cardsArray2,
  //   cardsArray3
  // ));
};

const pickRandomCards = (arr1, arr2, arr3) => {
  // Remove selected class from all cards
  var selectedCards = document.querySelectorAll('.selected');

  selectedCards.forEach((element) => {
    element.classList.remove('selected');
  });

  // Add selected class to random cards
  pickRandomFromArray(arr1).classList.add('selected');
  pickRandomFromArray(arr2).classList.add('selected');
  pickRandomFromArray(arr3).classList.add('selected');
};

const arrayFromList = (selector) => {
  var parentElement = document.querySelectorAll(selector);
  return Array.from(parentElement);
};

const pickRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};