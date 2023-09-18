var cardsArray1 = [];
var cardsArray2 = [];
var cardsArray3 = [];

const carousel1 = document.querySelector('.carousel-1');
const carousel2 = document.querySelector('.carousel-2');
const carousel3 = document.querySelector('.carousel-3');
const spinbutton = document.querySelector('.spin-btn');

spinbutton.addEventListener('click', slotmuziek);

function slotmuziek() {
  var audiobestand = document.getElementById('slotmuziek');
  audiobestand.play();
} ;


  
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

  // Add animation class to each carousel
  carousel1.classList.add('start-spinning');
  carousel2.classList.add('start-spinning');
  carousel3.classList.add('start-spinning');

  // Wait for 2 seconds so animation finishes
  sleep(2000);

  carousel1.classList.remove('start-spinning');
  carousel2.classList.remove('start-spinning');
  carousel3.classList.remove('start-spinning');

  carousel1.classList.add('spinning');
  carousel2.classList.add('spinning');
  carousel3.classList.add('spinning');


  
  // Choose random cards from each array
  var selectedCard1 = pickRandomFromArray(arr1);
  var selectedCard2 = pickRandomFromArray(arr2);
  var selectedCard3 = pickRandomFromArray(arr3);

  // Add selected class to each card (testing purposes)
  selectedCard1.classList.add('selected');
  selectedCard2.classList.add('selected');
  selectedCard3.classList.add('selected');
  
  var cardPosition1 = findSelectedCardPosition(carousel1, selectedCard1);
  var cardPosition2 = findSelectedCardPosition(carousel2, selectedCard2);
  var cardPosition3 = findSelectedCardPosition(carousel3, selectedCard3);


};

const findSelectedCardPosition = (parent, selected) => {
  var children = Array.from(parent.children);
  return children.indexOf(selected);
};

const arrayFromList = (selector) => {
  var children = document.querySelectorAll(selector);
  return Array.from(children);
};

const pickRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const sleep = async (ms) => new Promise(r => setTimeout(r, ms));