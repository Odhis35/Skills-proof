let myList = []
//const tabs = [{URL: "https://www.donatosports.com"}]
const EnterEL = document.getElementById("enter-EL")
const EnterBtn = document.getElementById("enter-btn")
const UlEl = document.getElementById("ul-el")
const DeleteBtn = document.getElementById("delete-btn")
const TabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myList"))
if(leadsFromLocalStorage){
    myList = leadsFromLocalStorage
    myFunction(myList)
}

TabBtn.addEventListener("click", function(){
    //TabBtn.textContent = tabs[0].URL
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myList.push(tabs[0].url) //save the tab url by pushing it to the array
        localStorage.setItem("myList", JSON.stringify(myList))//Save myList array to local storage
        myFunction(myList)
    })   
})


function myFunction(leads){//whatever data someone passes in becomes data that will be rendered
    let listItems = " "
    for(i=0; i<leads.length; i++){
        listItems += `
        <li>
            <a target = '_blank' href ='${leads[i]}'>
                ${leads[i]}
             </a>
        </li>`
    }
    UlEl.innerHTML = listItems
} //we have a function called myFunction that can take up any array you give it.

DeleteBtn.addEventListener("dblclick", function()
{
    localStorage.clear()
    myList = []
    myFunction(myList) //clear the DOM by rendering th list which is now empty
})

EnterBtn.addEventListener("click", function()
{
    myList.push(EnterEL.value)
    localStorage.setItem("myList", JSON.stringify(myList))
    myFunction(myList)
    EnterEL.value = " "
})


