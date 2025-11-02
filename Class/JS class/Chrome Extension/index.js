      let myleads = []
      const inputEl = document.getElementById("input-el")
      const saveButton = document.getElementById("save-btn")
      const saveTab = document.getElementById("save-tab")
      const deleteButton = document.getElementById("del-btn")
      // let containerEl = document.getElementById("container-el")
      //   const outputEl = document.getElementById("output-el")
      const ulEl = document.getElementById("ul-el")


      // localStorage.setItem("myleads",JSON.stringify(myleads))
      const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
      if (leadsFromLocalStorage)//only runs this line if leadsFromStorage is not null
      {
      myleads=leadsFromLocalStorage
      renderLeads(myleads)
      }

      //using a unique name like "item" here makes it reuseable.
      function renderLeads(item){
        let listItems =  ""
      for (let i = 0; i < item.length; i++) {
          //innerHTML make <li> work here
          //target='_blank' tells the browser to open it in a new tab
          //single quote for the link so it doesn't interfer with the double quote
          // double quote in a single quote and + on both sides. This ` can be used to wrap it all.
          //<a href='" + myleads[i] + "' target='_blank'>" + myleads[i] + "</a> works but longer
          //using ${referenced text} also works
            listItems += `<li>
              <a href='${item[i]}' target='_blank'> 
                ${item[i]} 
              </a>
              </li>`
        }
        ulEl.innerHTML = listItems;
        // containerEl.innerHTML = "<button> Buy </button>"
    }

    const tabs = [{url:"https://google.com"}]
    //How to access values within an object
    saveTab.addEventListener("click",function(){
      myleads.push(tabs[0].url)//this is beautiful
      renderLeads(myleads)
    })

      /*A method of controlling the Button
            function click(){
                console.log("Button Clicked")
            }*/

      /*Prof programmers method*/
      saveButton.addEventListener("click", function () {
        myleads.push(inputEl.value)
        inputEl.value=""
        renderLeads(myleads)
      })

      deleteButton.addEventListener("dblclick", function(){
        localStorage.clear()
        myleads= []
        renderLeads(myleads)
      })



      //Onclick method is another method
      // containerEl.addEventListener("click", function () {
      //   //One Method,
      //   //containerEl.innerHTML += "<p> Thank you for buying </p>"

      //   //Another method
      //   let para = document.createElement("p"); //whatever is in bracket works as <p> in HTML
      //   para.textContent = "Thank you for buying"
      //   containerEl.append(para) //returns the declared variable para
      // });