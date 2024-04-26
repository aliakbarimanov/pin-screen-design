// const keyButton = document.querySelectorAll(".keyButton");

// keyButton.forEach((item) => {
//   // item.addEventListener("keypress", () => console.log("DSDS"));
//   // console.log(item);
// });

// function calll(){
//   console.log("Cd,ajhcvakehds");
// }

const dotContainer = document.querySelector("#dotContainer");

function createDot() {
  const newDot = document.createElement("span");
  newDot.classList.add("newDot");
  dotContainer.appendChild(newDot);
}

function clearDots() {
  const dot = document.querySelectorAll(".newDot");
  // console.log(dot);

  // dotContainer.children.removeAll();

  console.log(dotContainer.children);
}

const 