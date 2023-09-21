// ---------- Global variables ---------- //

var cardsArray1 = [];
var cardsArray2 = [];
var cardsArray3 = [];

const carousel1 = document.querySelector('.carousel-1');
const carousel2 = document.querySelector('.carousel-2');
const carousel3 = document.querySelector('.carousel-3');
const spinbutton = document.querySelector('.spin-btn');

// ---------- Initial setup ---------- //

// Add event listener to the spin button
spinbutton.addEventListener('click', () => {
  slotmuziek(); 
  pickRandomCards(
    cardsArray1,
    cardsArray2,
    cardsArray3
  )}
);

// Initialize the card arrays on page load
window.onload = () => {
  cardsArray1 = arrayFromList('.carousel-1 > li');
  cardsArray2 = arrayFromList('.carousel-2 > li');
  cardsArray3 = arrayFromList('.carousel-3 > li');
};

// ---------- Main functions ---------- //

// Function to start playing the music on click
function slotmuziek() {
  var audiofile = document.getElementById('slotmuziek');
  audiofile.play();
} ;

// Function for when the spin button is clicked
const pickRandomCards = async (arr1, arr2, arr3) => {
  // This offset is used later to center the selected card
  const offset = 13;

  // Call the spinState function to make the carousels start spinning
  changeSpinState(carousel1, "start");
  changeSpinState(carousel2, "start");
  changeSpinState(carousel3, "start");

  // Let the animation play out (2 seconds)
  await sleep(2000);

  // Call the spinState function again to make the carousels continue spinning at full speed
  changeSpinState(carousel1, "continue");
  changeSpinState(carousel2, "continue");
  changeSpinState(carousel3, "continue");

  // Let the animation play out (4.75 seconds)
  await sleep(4750);
  
  // Choose random cards from each array
  var selectedCard1 = pickRandomFromArray(arr1);
  var selectedCard2 = pickRandomFromArray(arr2);
  var selectedCard3 = pickRandomFromArray(arr3);

  // Calculate the carousel rotation to display the selected card in the middle
  // 360 / number of cards * position of selected card + offset
  var cardPosition1 = 360 / cardsArray1.length * findSelectedCardPosition(carousel1, selectedCard1) + offset;
  var cardPosition2 = 360 / cardsArray2.length * findSelectedCardPosition(carousel2, selectedCard2) + offset;
  var cardPosition3 = 360 / cardsArray3.length * findSelectedCardPosition(carousel3, selectedCard3) + offset;

  // Call the spinState function to make the first carousel stop spinning
  // Set the transform property to display the selected card in the middle
  // Then wait for a set delay before stopping the next carousel
  changeSpinState(carousel1, "stop");
  carousel1.style.transform = "rotateX(" + cardPosition1 + "deg)";
  await sleep(1000);

  // Repeat for carousel two
  changeSpinState(carousel2, "stop");
  carousel2.style.transform = "rotateX(" + cardPosition2 + "deg)";
  await sleep(1000);

  // Repeat for carousel three
  changeSpinState(carousel3, "stop");
  carousel3.style.transform = "rotateX(" + cardPosition3 + "deg)";
};

// ---------- Helper functions ---------- //

// Function to change the spin state of the carousels
const changeSpinState = (element, state) => {
  // Switch statement to determine which state to apply
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

// Function to find the position of the selected card within the parent element
const findSelectedCardPosition = (parent, selected) => {
  var children = Array.from(parent.children);
  return children.indexOf(selected);
};

// Function to convert a <list> element into an array
const arrayFromList = selector => {
  var children = document.querySelectorAll(selector);
  return Array.from(children);
};

// Function to pick a random item from an array
const pickRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Function to wait for a set amount of time
const sleep = async (ms) => new Promise(r => setTimeout(r, ms));
