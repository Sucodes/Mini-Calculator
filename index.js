//selectors
const td = document.querySelectorAll("td");
const displayScreen = document.getElementById("display");
const result = document.getElementById("result");

//eventlistener
td.forEach(td=> {
    td.addEventListener("click", calculate);
});


// function to delete numbers
let delButton = document.querySelector(".delete__btn");
delButton.addEventListener("click", del);
function del(){
    result.innerHTML = "";
    displayScreen.innerText = displayScreen.textContent.slice(0, -2);
}

// function to evaluate numbers

function calculate() {
    let number = this.innerText;
   
    if (number === "C") {
        displayScreen.innerText = "";
        result.innerText = "";
        return;
    }

    else if (number === "=") {
        try {
            result.innerText = eval(displayScreen.innerText);
            return;
        }
        catch {
            console.log("Error");
            displayScreen.innerText = "";
            result.innerText = "Error";
        }
    }
        
    else {
        displayScreen.textContent += number;
        return; 
    }
};