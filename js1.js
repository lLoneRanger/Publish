//document.getElementById("count-el").innerText=5;

//let count = 0 //let "count" be 0

//console.log(count)//for debugging purpose

// let firstbatch =5
// let secondbatch = 7
// let count = firstbatch +secondbatch;

// console.log(count).........

// let myAge=7;
// let humanDogRatio=1.2

// let myDogAge= myAge*humanDogRatio
// console.log(myDogAge).........

// let count=5
// count = count +2
// console.log(count)......

// let bonusPoints =50

// bonusPoints = bonusPoints+50
// console.log(bonusPoints)

// bonusPoints = bonusPoints-75
// console.log(bonusPoints)

// bonusPoints = bonusPoints+45
// console.log(bonusPoints)..........

// function increment(){
//     //body of this function
//     console.log("The button was clicked")
// }

// function countdown(){
//     console.log(5)
//         console.log(4)
//             console.log(3)
//                 console.log(2)
//                     console.log(1)
// }

// countdown()//output data from the functions

// function displayname(){
//     console.log(42)
// }

// displayname()

// let lap1 =34
// let lap2 =33
// let lap3 = 36

// function totalt(){
//     //let total = lap1+lap2+lap3
//     console.log(lap1 +lap2+lap3)
// }

// totalt()

// let lapscompleted = 0

// function tlaps(){
//     lapscompleted =lapscompleted+1
// }

// tlaps()
// tlaps()
// tlaps()

//     console.log(lapscompleted) 
let countEl = document.getElementById("count-el")

let count=0

function increment()
{
    count+=1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")

function save()
{
   saveEl.textContent+= count + ' - '
   countEl.innerText=0
   count=0
}
