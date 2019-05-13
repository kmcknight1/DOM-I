
let digits = document.querySelector(".digits");
let digit = document.querySelectorAll(".digit");



let startButton = document.createElement("button");
startButton.innerText = "Start";
digits.append(startButton);
startButton.style.display = "inline-block";
startButton.style.height = "45px";
startButton.style.width = "100px";
startButton.style.borderRadius = "20px";
startButton.style.marginLeft = " 30px";
startButton.style.fontSize = "25px";
startButton.style.fontWeight = "bold";
startButton.style.backgroundColor = "#F3DFFC";
startButton.style.boxShadow = "3px 3px 2px grey, inset 3px 3px 5px white";
startButton.style.color = "#424242";
startButton.style.textShadow = "0px 0px 10px white";


let stopButton = document.createElement("button");
stopButton.innerText = "Stop";
digits.append(stopButton);
stopButton.style.display = "inline-block";
stopButton.style.height = "45px";
stopButton.style.width = "100px";
stopButton.style.borderRadius = "20px";
stopButton.style.marginLeft = " 25px";
stopButton.style.fontSize = "25px";
stopButton.style.fontWeight = "bold";
stopButton.style.backgroundColor = "#F3DFFC";
stopButton.style.boxShadow = "3px 3px 2px grey, inset 3px 3px 5px white";
stopButton.style.color = "#424242";
stopButton.style.textShadow = "0px 0px 10px white";

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

let timerIsRunning = false;
let timerStopped = true;
function runTimer() {
  timerIsRunning = true;
  timerStoped = false;

  if (
    digit[0].innerText !== "0" ||
    digit[1].innerText !== "0" ||
    digit[3].innerText !== "0" ||
    digit[4].innerText !== "0"
  ) {
    digit[0].innerText = "0";
    digit[1].innerText = "0";
    digit[3].innerText = "0";
    digit[4].innerText = "0";
    msTens = 0;
    msHundreds = 0;
    secondOnes = 0;
    secondTens = 0;
  }
  digit[0].innerText = "0";
  for (let i = 0; i < digit.length; i++) {
    digit[i].classList.remove("redDigit");
  }
  const msTensInterval = setInterval(() => {
    digit[4].innerText = msTens;
    msTens += 1;
    if (msTens > 9) {
      msTens = 0;
    }
  }, 10);
  const msHundredsInterval = setInterval(() => {
    digit[3].innerText = msHundreds;
    msHundreds += 1;
    if (msHundreds > 9) {
      msHundreds = 0;
    }
  }, 100);
  const secondOnesInterval = setInterval(() => {
    secondOnes += 1;
    digit[1].innerText = secondOnes;
    if (secondOnes > 9) {
      secondOnes = 0;
    }
  }, 1000);
  const secondTensInterval = setInterval(() => {
    secondTens = 1;
    digit[0].innerText = secondTens;
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    clearInterval(secondTensInterval);
    digit[0].innerText = "1";
    digit[1].innerText = "0";
    digit[3].innerText = "0";
    digit[4].innerText = "0";
    for (let i = 0; i < digit.length; i++) {
      digit[i].classList.add("redDigit");
    }
    timerStopped = true;
    timerIsRunning = false;
  }, 10000);


  stopButton.addEventListener("click", () => {
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    clearInterval(secondTensInterval);
    timerIsRunning = false;
    timerStopped = true;
    for (let i = 0; i < digit.length; i++) {
      digit[i].classList.add("redDigit");
    }
  });
}


startButton.addEventListener("click", () => {
  if (!timerIsRunning) {
    console.log("running!");

    runTimer();
  }
});
