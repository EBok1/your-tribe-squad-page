const arrayFromList = () => {
  var listElement = document.querySelectorAll('.carousel-1 > li');
  var tab10 = Array.from(listElement);

};

const pickRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};