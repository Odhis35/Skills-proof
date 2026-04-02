import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyD56batH9r3zhCDf5YDCP0LCLht8DHjhIc",
    authDomain: "lead-track-f946a.firebaseapp.com",
    databaseURL: "https://lead-track-f946a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lead-track-f946a",
    storageBucket: "lead-track-f946a.firebasestorage.app",
    messagingSenderId: "577426167482",
    appId: "1:577426167482:web:9b976cd96014a315e91483"
    //databaseURL: "https://lead-track-f946a-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

//let myList = []
//const tabs = [{URL: "https://www.donatosports.com"}]
const EnterEL = document.getElementById("enter-EL")
const EnterBtn = document.getElementById("enter-btn")
const UlEl = document.getElementById("ul-el")
const DeleteBtn = document.getElementById("delete-btn")
//const TabBtn = document.getElementById("tab-btn")

//const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myList"))
//if(leadsFromLocalStorage){
    //myList = leadsFromLocalStorage
    //myFunction(myList)
//}

//TabBtn.addEventListener("click", function(){
    ///TabBtn.textContent = tabs[0].URL(stays commented when you undo comments///
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //myList.push(tabs[0].url) //save the tab url by pushing it to the array
        //localStorage.setItem("myList", JSON.stringify(myList))//Save myList array to local storage
        //myFunction(myList)
    //})  
//})

function myFunction(leads){//whatever data someone passes in becomes data that will be rendered
    let listItems = " "
    for(let i=0; i<leads.length; i++){
        listItems += `
        <li>
            <a target = '_blank' href ='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
    UlEl.innerHTML = listItems
 } //we have a function called myFunction that can take up any array you give it.
//function createList(leads){
    //const li = document.createElement("li")
    //li.textContent = leads[i]
    //UlEl.append(li)
//}
//function getValue(){
    
//only run the code below if a snapshot exists
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
        if(snapshotDoesExist){
            const snapshotValues = snapshot.val()
            const list = Object.values(snapshotValues)
            //createList(list)
            myFunction(list)// render the values saved in const leads
        }
})
    //}

DeleteBtn.addEventListener("dblclick", function()
{
    remove(referenceInDB)
    UlEl.innerHTML = " "// clear all the leads from the ulEl
    //localStorage.clear()
    //myList = []
    //myFunction(myList) //clear the DOM by rendering th list which is now empty
})

EnterBtn.addEventListener("click", function()
{
    push(referenceInDB, EnterEL.value)
    //myList.push(EnterEL.value)
    //localStorage.setItem("myList", JSON.stringify(myList))
    //myFunction(myList)
    EnterEL.value = " "
})


