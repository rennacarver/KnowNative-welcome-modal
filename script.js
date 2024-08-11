const dialogWelcome = document.querySelector("dialog.dialog-welcome");

const toOneFromTwo = document.querySelector("button.dialog-one");
const toTwoFromOne = document.querySelector("button.dialog-two");
const toThreeFromTwo = document.querySelector("button.dialog-three");
const toTwoFromThreeButton = document.querySelector("button.dialog-two-from-three");
const exitButton = document.querySelector("button.exit");

const beginnerDiv = document.querySelector("div.beginner-div");
const intermediateDiv = document.querySelector("div.intermediate-div");
const advancedDiv = document.querySelector("div.advanced-div");

//display page one, hide pages two and three on page load
document.querySelector(".page-two").style.display = 'none';
document.querySelector(".page-three").style.display = 'none';

//initialize radio choice to beginner
let textSelection = "beginner";
document.getElementById("textChoice").innerHTML = textSelection;
beginnerDiv.classList.add('active-radio-div');
document.getElementById('beginnerRadioButton').checked = true;

dialogWelcome.showModal();

// Navigation button logic
// toTwoFromOne button closes the first modal and opens the second modal
toTwoFromOne.addEventListener("click", () => {
  document.querySelector(".page-one").style.display = 'none';
  document.querySelector(".page-two").style.display = 'block';
  });

// toOneFromTwo button closes the second modal and opens the first modal
toOneFromTwo.addEventListener("click", () => {
    document.querySelector(".page-one").style.display = 'block';
    document.querySelector(".page-two").style.display = 'none';
  });

// toThreeFromTwo button closes the second modal and opens the third modal
toThreeFromTwo.addEventListener("click", () => {
    document.querySelector(".page-three").style.display = 'block';
    document.querySelector(".page-two").style.display = 'none';
  });

// toTwoFromThreeButton button closes the third modal and opens the second modal
toTwoFromThreeButton.addEventListener("click", () => {
    document.querySelector(".page-three").style.display = 'none';
    document.querySelector(".page-two").style.display = 'block';
  });

// exit button closes the third modal and submits the text selection
exitButton.addEventListener("click", () => {
  dialogWelcome.close();
  
  fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    text: textSelection
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

});


// Radio button logic
//when the radio div is clicked, make that div active and the other two inactive
//display explanation of text level
//set value for form submitted by page three
//set the text level on page three

beginnerDiv.addEventListener("click", () => {
  if (document.getElementById('beginnerRadioButton').checked) {
    beginnerDiv.classList.add('active-radio-div');
    intermediateDiv.classList.remove('active-radio-div');
    advancedDiv.classList.remove('active-radio-div');
    textSelection = "beginner";
    document.getElementById("textChoice").innerHTML = textSelection
    
  }
})

intermediateDiv.addEventListener("click", () => {
  if (document.getElementById('intermediateRadioButton').checked) {
    intermediateDiv.classList.add('active-radio-div');
    beginnerDiv.classList.remove('active-radio-div');
    advancedDiv.classList.remove('active-radio-div');
    textSelection = "intermediate";
    document.getElementById("textChoice").innerHTML = textSelection
   
  }
})

advancedDiv.addEventListener("click", () => {
  if (document.getElementById('advancedRadioButton').checked) {
    advancedDiv.classList.add('active-radio-div');
    beginnerDiv.classList.remove('active-radio-div');
    intermediateDiv.classList.remove('active-radio-div');
    textSelection = "advanced";
    document.getElementById("textChoice").innerHTML = textSelection
    
  }
})

