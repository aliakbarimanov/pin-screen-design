let pass = [];

const dotContainer = document.querySelector("#dotContainer");

function createDot(val) {
  if (pass.length <= 3) {
    const newDot = document.createElement("span");
    newDot.classList.add("newDot");
    dotContainer.appendChild(newDot);

    pass.push(val);
    console.log(pass);
  }
}

function clearDots() {
  pass = [];

  dotContainer.innerHTML = "";

  console.log(dotContainer.children);
  console.log(pass);
}

function removeLastNumber() {
  pass = pass.slice(0, pass.length - 1);

  for (let i = 0; i++; i <= pass.length) {
    const newDot = document.createElement("span");
    newDot.classList.add("newDot");
    dotContainer.appendChild(newDot);
  }

  console.log(pass);
}
