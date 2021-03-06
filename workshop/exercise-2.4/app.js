// with css build out the playing platform
//  add the start button On load.
// give start button functionality of a 5 second timer countdown with set interval.
// also once its clicked addevent of starting the game which randomly generates circles that need to switch to red.
//  check

const getTimer = document.querySelector(".timer");
const getCountDown = document.querySelector(".countdown");
const getBoard = document.querySelector(".board");

let result = 0;
let counter = 4;

window.addEventListener("load", () => {
  getTimer.style.display = "block";
});


function createNewBoard () {
  for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
    const newBtn = document.createElement("button");
    newBtn.style.display = "none";
    newBtn.innerText = i + 1;
    newBtn.classList.add("newBtn");
    getBoard.appendChild(newBtn);
  }
}

let arr = [];

getTimer.addEventListener("click", () => {
  getTimer.style.display = "none";
  getCountDown.style.display = "block";
  createNewBoard()
  let newInterval = setInterval(() => {
    if (counter <= 0){
      clearInterval(newInterval);
      if (!arr.every(el => el === true)) {
        document.querySelector(".lose").style.display = "flex";
      }
    }
    getCountDown.innerText = counter;
    counter -= 1;
  }, 1000);


  document.querySelectorAll(".newBtn").forEach((button, i) => {
    arr[i] = false;
    button.style.display = "block";
    getBoard.appendChild(button);
    button.style.top = Math.ceil(Math.random() * 80) + "%";
    button.style.left = Math.ceil(Math.random() * 80) + "%";
    button.style.position = "absolute";
    
    button.addEventListener("click", function () {
      if (counter > 0) {
        if (arr[i] === false) {
          button.style.backgroundColor = "green";
          arr[i] = true;
        } else {
          button.style.backgroundColor = "crimson";
          arr[i] = false;
        }
        if (arr.every((el) => el === true) && getCountDown.innerText > 0) {
          document.querySelector(".win").style.display = "flex";
        }
      }
    });
  });
});

// if (getAllButtons.every((button) => {button.style.backgroundColor === 'green'})) {
//   console.log('you won!')
// }

// console.log(getAllButtons)
