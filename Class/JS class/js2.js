
// let myPoint =3
// function add3Points()
// {
// myPoint+=3
// }

// function removalpoint()
// {
// myPoint-=1
// }

// add3Points()
// add3Points()
// add3Points()
// removalpoint()
// removalpoint()

// console.log(myPoint)

// let err= document.getElementById("error")

// function render(){
//     err.textContent="Something when wrong"
// }



// Lesson 2 - Calculator
// var a = 5
// document.getElementById("fNum").textContent =a
// var b = 7
// document.getElementById("sNum").textContent =b
// let ans= document.getElementById("result")

// function add(){
//     let res = a+b
// ans.textContent = 'Sum' + res
// }

// function subt()
// {
//     let res = a-b
// ans.textContent = 'Sub' + res
// }

// function mult(){
//    let res = a*b
// ans.textContent = 'Mult' + res
// }

// function div(){
//    let res = a/b
// ans.textContent = 'Div' + res
// }


//Lesson 3 - Nightclub Age
// let age = 21

// if (age<21)
// {
//     console.log("Get out")
// }
// else{
//     console.log("Welcome")
// }

// Age Birthday 100
// let age =99.9

// if(age<100)
// {
//     console.log('you are not eligible')
// }
// else if (age===100) //triple equals is strict
// {
//     console.log("Happy Birthday")
// }
// else 
// {
//     console.log('Greed Alert')
// }

/*Lesson for loop
let sentence = ['hello','my','is','per']
let greetingEl = document.getElementById("greeting-el")

for (let i=0; i<sentence.length;i++)
{
  greetingEl.textContent+=sentence[i] + ' '
}
  */

//Lesson 4 - object.keys(values), Creating objects
// let person = {
//   name: "Yinka",
//   age: 15,
//   country: "Pakistan"
// }

// function logData()
// {
//   console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

//Lesson 5 - if else
//   let age = 19
//   let access = true

// if (age < 18 && access === true){
//   console.log ("underage with access")
// }

// else if(age < 18 && access === false){
//   console.log ("You're not allowed")
// }

// else if(age > 18){
//   console.log ("Welcome")
// }

//Lesson 6 - shift() and unshift()

// let arr = ["goat","ram", "sheep","cow","donkey"]

// // let rem = arr.shift();removes and stores the first item
// //let rem = arr.unshift("camel");inserts item as first item and returns the array length

// console.log(arr.length)
// // console.log(rem)
// for(let i=0;i<arr.length;i++)
// {
// console.log(arr[i])
// }

//Lesson 7 - Rock, Paper and Scissors
// let handSigns = ["rock","paper","scissors"]

// function currentHand(){
//   let number = Math.floor(Math.random()*3)
//   return number
// }

// let handOne = handSigns[currentHand()]
// let handTwo = handSigns[currentHand()]

// console.log("First Hand = " + handOne)
// console.log("Second Hand = " + handTwo)

// if (handOne === handTwo)
// {
//   console.log("Draw")
// }

// else if (handOne === "rock" && handTwo ==="paper")
// {
//   console.log("Second Hand wins")
// }

// else if (handTwo === "rock" && handOne ==="paper")
// {
//   console.log("First Hand wins")
// }

// else if (handOne === "paper" && handTwo ==="scissors")
// {
//   console.log("Second Hand wins")
// }

// else if (handTwo === "paper" && handOne ==="scissors")
// {
//   console.log("First Hand wins")
// }

// else if (handTwo === "rock" && handOne ==="scissors")
// {
//   console.log("Second Hand wins")
// }

// else if (handOne === "rock" && handTwo ==="scissors")
// {
//   console.log("First Hand wins")
// }

