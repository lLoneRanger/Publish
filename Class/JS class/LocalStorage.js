      let myleads = []

// localStorage.setItem("myleads","vsvvszws") only stores strings
//     console.log(localStorage.getItem("myleads"))
//     localStorage.clear()

//Because myleads is an array, we use JSON.stringy. It makes myleads value turn string
localStorage.setItem("myleads",JSON.stringify(myleads))
//to get the input we use JSON.parse which turns it into an array again. JSON makes it turn to strings
JSON.parse(localStorage.getItem("myleads"))