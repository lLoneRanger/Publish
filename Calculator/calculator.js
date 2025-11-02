//Screen
const theInput = document.getElementById("input")
const theAnswer = document.getElementById("answer")
const theEquation =document.getElementById("peek");


//UNASSIGNED
//Simulatenous Equation
    function simultaneous (a,b,c){
        let negNumerator = (-b) - Math.sqrt( b**2 - (4*a*c))
        let posNumerator = (-b) + Math.sqrt( b**2 - (4*a*c))
        let denumerator = 2*a
        let negSolution =  negNumerator/denumerator
        let posSolution = posNumerator/denumerator
        return [posSolution,negSolution] 
    }
    //console.log(simultaneous(1, 4, 4))


//Special commands
const percentage = document.getElementById("percent")
const positiveNeg = document.getElementById("pos-neg")
const squareRoot = document.getElementById("sqrt")
const squared = document.getElementById("square")
const backSpace = document.getElementById("backspace")

percentage.addEventListener("click", function(){
  theInput.textContent += "%"
  theEquation.textContent += "*0.01"
})

positiveNeg.addEventListener("click", function(){
  theInput.textContent += "(neg)"
  theEquation.textContent += "*(-1)"
})

squareRoot.addEventListener("click", function(){
  let grab = theInput.textContent
  theInput.textContent += "sqrt("
  theEquation.textContent += "Math.sqrt("
})

squared.addEventListener("click", function(){
  theInput.textContent += "pow2"
  theEquation.textContent += "**2"
})

backSpace.addEventListener("click", function(){
    let currentText = theInput.textContent
    //slice(0, -1) extracts the string from the beginning up to but excluding the last character
  theInput.textContent = currentText.slice(0, -1)
})

//Conversion section
const openBracket = document.getElementById("open-brac")
const closeBracket = document.getElementById("close-brac")

openBracket.addEventListener("click", function(){
  theInput.textContent += "("
  theEquation.textContent += "("
})

closeBracket.addEventListener("click", function(){
  theInput.textContent += ")"
  theEquation.textContent += ")"
})

//Numbers section
const numberSection = document.querySelectorAll(".num");
  numberSection.forEach(button => {
    button.addEventListener("click", () => {
      theInput.textContent += button.getAttribute("data-value")
      theEquation.textContent += button.getAttribute("data-value")
    })
  })

//General section
const addition = document.getElementById("add")
const subtraction = document.getElementById("sub")
const division = document.getElementById("div")
const multiple = document.getElementById("mult")

addition.addEventListener("click", function(){
    theInput.textContent += "+"
    theEquation.textContent += "+"
})

subtraction.addEventListener("click", function(){
    theInput.textContent += "-"
    theEquation.textContent += "-"
})

division.addEventListener("click", function(){
    theInput.textContent += "/"
    theEquation.textContent += "/"
})

multiple.addEventListener("click", function(){
    theInput.textContent += "*"
    theEquation.textContent += "*"
})

//Equal section
const cleared = document.getElementById("clear")
const answers = document.getElementById("answers")
const equals = document.getElementById("eq")
let solution;
 
cleared.addEventListener("click", function(){
    theInput.textContent = ""
    theEquation.textContent = ""
    theAnswer.textContent = ""
})

equals.addEventListener("click", function(){
     //eval is used for the calculation
    try {
    solution = eval(theEquation.textContent)
    //Try-catch handles unexpected errors/exceptions to prevent crashes.
    // /\d/ is a regex that tests if the string has any digit (0-9)
    theAnswer.textContent = solution
    
    if (typeof solution ==='number') {
      theAnswer.textContent = solution
    }

    else {
        theAnswer.textContent = "Error: It's empty";
        return;
        }
    }
    catch (e) {
        theAnswer.textContent = "Error";
    }
    })

answers.addEventListener("click", function(){
  if (solution !== undefined) {
    theEquation.textContent += solution;
  } 
  else {
    // Handle case when solution hasn't been set yet
    theAnswer.textContent = "No solution available";
  }
});