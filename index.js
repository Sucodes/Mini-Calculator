//selectors
const td = document.querySelectorAll("td");
const displayScreen = document.getElementById("display");
const result = document.getElementById("result");

//eventlistener
td.forEach(td=> {
    td.addEventListener("click", calculate);
});

// function to evaluate numbers
function calculate() {
    let number = this.innerText;

    if (number === "C") {
        displayScreen.innerText = "";
        result.innerText = "";
        return;
    }

    else if (number === "&#8634;") {
        displayScreen.innerText = displayScreen.textContent.substring(0, displayScreen.textContent.length-1);
        return;
    }

    else if (number === "=") {
        result.innerText = eval(displayScreen.innerText);
        return;
    }

    else {
        displayScreen.textContent += number;
        return; 
    }
};