let countEl= document.getElementById("count-el")
let resultEL = document.getElementById("result-el")
let sav = 0
let count = 0
function prospect() {
    count += 1
    countEl.innerText = count
}

function save() {
    
   let countStr=  count + " - "
       //countEl.innerText =  count
    resultEL.textContent += countStr
     countEl.textContent = sav
  count = 0 
}

