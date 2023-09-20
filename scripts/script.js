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
};

const pickRandomCards = async (arr1, arr2, arr3) => {
  // Remove selected class from all cards
  var selectedCards = document.querySelectorAll('.selected');
  
  selectedCards.forEach((element) => {
    element.classList.remove('selected');
  });

  changeSpinState(carousel1, "start");
  changeSpinState(carousel2, "start");
  changeSpinState(carousel3, "start");

  await sleep(2000);

  changeSpinState(carousel1, "continue");
  changeSpinState(carousel2, "continue");
  changeSpinState(carousel3, "continue");

  await sleep(6000);
  
  // Choose random cards from each array
  var selectedCard1 = pickRandomFromArray(arr1);
  var selectedCard2 = pickRandomFromArray(arr2);
  var selectedCard3 = pickRandomFromArray(arr3);

  // Add selected class to each card (testing purposes)
  selectedCard1.classList.add('selected');
  selectedCard2.classList.add('selected');
  selectedCard3.classList.add('selected');
  
  var cardPosition1 = 360/15*findSelectedCardPosition(carousel1, selectedCard1);
  var cardPosition2 = 360/15*findSelectedCardPosition(carousel2, selectedCard2);
  var cardPosition3 = 360/15*findSelectedCardPosition(carousel3, selectedCard3);


  changeSpinState(carousel1, "stop");
  // carousel1.style.transform = "translateX(-7.28em) rotateX(" + cardPosition1 + "deg)";
  carousel1.style.transform = "rotateX(" + cardPosition1 + "deg)";
  console.log(cardPosition1);

  await sleep(1000);

  changeSpinState(carousel2, "stop");
  // carousel2.style.transform = "translateX(-7.28em) rotateX(" + cardPosition2 + "deg)";
  carousel2.style.transform = "rotateX(" + cardPosition2 + "deg)";
  console.log(cardPosition2);

  await sleep(1000);

  changeSpinState(carousel3, "stop");
  // carousel3.style.transform = "translateX(-7.28em) rotateX(" + cardPosition3 + "deg)";
  carousel3.style.transform = "rotateX(" + cardPosition3 + "deg)";
  console.log(cardPosition3);
};

const changeSpinState = (element, state) => {
  switch(state){
    case "start":
      // Add animation class to each carousel
      element.classList.add('start-spinning');
      break;
    case "continue":
      // Remove previous animation class on each carousel
      element.classList.remove('start-spinning');

      // Add animation class to each carousel
      element.classList.add('spinning');
      break;
    case "stop":
      // Remove previous animation class on each carousel
      element.classList.remove('spinning');
      break;
  }
};

const findSelectedCardPosition = (parent, selected) => {
  var children = Array.from(parent.children);
  return children.indexOf(selected);
};

const arrayFromList = selector => {
  var children = document.querySelectorAll(selector);
  return Array.from(children);
};

const pickRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const sleep = async (ms) => new Promise(r => setTimeout(r, ms));