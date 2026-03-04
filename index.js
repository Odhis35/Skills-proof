let myList = []
const EnterEL = document.getElementById("enter-EL")
const EnterBtn = document.getElementById("enter-btn")
const UlEl = document.getElementById("ul-el")

EnterBtn.addEventListener("click", function()
{
    myList.push(EnterEL.value)
    myFunction()
    EnterEL.value = " "
})

function myFunction(){
    let listItems = " "
    for(i=0; i<myList.length; i++){
        listItems += `
        <li>
            <a target = '_blank' href ='${myList[i]}'>
                ${myList[i]}
             </a>
        </li>`
    }
    UlEl.innerHTML = listItems
}

