

// ID Section
let cbtn = document.getElementById("cbtn");
let rbtn = document.getElementById("rbtn");

let bInput = document.getElementById("bInput");
let cInput = document.getElementById("cInput");
let bx1 = document.getElementById("bx1");
let bx2 = document.getElementById("bx2");
let bx3 = document.getElementById("bx3");
let bx4 = document.getElementById("bx4");
let bx5 = document.getElementById("bx5");
let bx6 = document.getElementById("bx6");
let bx7 = document.getElementById("bx7");
let bx8 = document.getElementById("bx8");


let userColorInput = "";
let userBoxInput = " ";

cbtn.addEventListener("click", function () {
  userColorInput = cInput.value;
  console.log(userColorInput);

  userBoxInput = bInput.value;
  console.log(userBoxInput);

  if (userBoxInput == 1) {
    bx1.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 2) {
    bx2.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 3) {
    bx3.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 4) {
    bx4.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 5) {
    bx5.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 6) {
    bx6.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 7) {
    bx7.style.backgroundColor = userColorInput;
  } else if (userBoxInput == 8) {
    bx8.style.backgroundColor = userColorInput;
  }
});

rbtn.addEventListener('click', function (){
bx1.style.backgroundColor = "white";
bx2.style.backgroundColor = "white";
bx3.style.backgroundColor = "white";
bx4.style.backgroundColor = "white";
bx5.style.backgroundColor = "white";
bx6.style.backgroundColor = "white";
bx7.style.backgroundColor = "white";
bx8.style.backgroundColor = "white";





})

