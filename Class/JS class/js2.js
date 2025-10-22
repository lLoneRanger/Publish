
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

// BlackJack
let firstCard = 5
let secondCard = 4
let cards =[firstCard, secondCard]
//cards.length tells the amount of items in the array when combined with console.log
//cards.push(newnumber) is used to add new items
//cards.pop is used to remove the last item
let disp= cards[0] + ' and ' + cards[1]
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el")//another method by works with # before the id
let numsEl = document.querySelector(".nums")//another method but works with a dot before class

var sum =cards[0] + cards[1]

function getRandomCard(){
  //let ran = Math.random()//between 0 and 1
  //let ran = Math.random()*6//between 0 and 6
  //let ran = Math.floor(3.95632)//removes decimals
  let ran=Math.floor(Math.random()*14)
  return ran;
}

function startGame()
{
    Game()
}

function Game(){
if(sum === 21)
 {
message = 'Blackjack'
 }

 else if(sum <= 20)
 {
   message = 'Do you want another deal?'
 }

 else{
     message ='You are out of the game'
 }

numsEl.textContent= cards.length + 'Cards: ' + disp
messageEl.textContent=message
sumEl.textContent= 'Sum = ' + sum
}

function newCard()
{
cards.push(getRandomCard())
for(let i=2;i<cards.length;i+1)
{
sum+=cards[i]
disp += ' and ' + cards[i]
Game()
}
}


//Nightclub Age
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