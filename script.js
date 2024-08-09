const dialogOne = document.querySelector("dialog.dialog-one");
const dialogTwo = document.querySelector("dialog.dialog-two");
const dialogThree = document.querySelector("dialog.dialog-three");

const toOneButton = document.querySelector("button.dialog-one");
const toTwoButton = document.querySelector("button.dialog-two");
const toThreeButton = document.querySelector("button.dialog-three");
const toTwoFromThreeButton = document.querySelector("button.dialog-two-from-three");
const exitButton = document.querySelector("button.exit");

const beginnerDiv = document.querySelector("div.beginner-div");
const intermediateDiv = document.querySelector("div.intermediate-div");
const advancedDiv = document.querySelector("div.advanced-div");

let textSelection = " ";

dialogOne.showModal();

//On initial page load, set text selection div to active
if (document.getElementById('beginnerRadioButton').checked){
  beginnerDiv.classList.add('active-radio-div');
  textSelection = "beginner";
  document.getElementById("textChoice").innerHTML = textSelection
} 
  

if (document.getElementById('intermediateRadioButton').checked){
  intermediateDiv.classList.add('active-radio-div');
  textSelection = "intermediate";
  document.getElementById("textChoice").innerHTML = textSelection
} 
  

if (document.getElementById('advancedRadioButton').checked){
  advancedDiv.classList.add('active-radio-div');
  textSelection = "advanced";
  document.getElementById("textChoice").innerHTML = textSelection
} 
  

// Navigation button logic
// toTwoButton button closes the first modal and opens the second modal
toTwoButton.addEventListener("click", () => {
    dialogOne.close();
    dialogTwo.showModal();
  });

// toOneButton button closes the second modal and opens the first modal
toOneButton.addEventListener("click", () => {
    dialogTwo.close();
    dialogOne.showModal();
  });

// toThreeButton button closes the second modal and opens the third modal
toThreeButton.addEventListener("click", () => {
    dialogTwo.close();
    dialogThree.showModal();
  });

// toTwoFromThreeButton button closes the third modal and opens the second modal
toTwoFromThreeButton.addEventListener("click", () => {
    dialogThree.close();
    dialogTwo.showModal();
  });

// exit button closes the third modal and submits the text selection
exitButton.addEventListener("click", () => {
  dialogThree.close();
  
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
//set value for form submitted by modal three
//set the text level on modal three

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

