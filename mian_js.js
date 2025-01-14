// changes background colours in main doc

const defaultRGB = [245, 222, 179]
let buttonClicked = false;
let currentInterval = -1;


document.addEventListener("DOMContentLoaded", () => {
    
    let button = document.getElementById("mainBT");
    button.onclick = changeColorMode;
});

let changeColorMode = () => {
    if (buttonClicked) {
        if (currentInterval != -1) {clearInterval(currentInterval)};
        document.getElementById("mainBG").style.backgroundColor = `rgb(${defaultRGB[0]}, ${defaultRGB[1]}, ${defaultRGB[2]})`;
        document.getElementById("statusTXT").innerHTML = "Mode: Static";
        buttonClicked = false;
    } else {
        buttonClicked = true;
        document.getElementById("statusTXT").innerHTML = "Mode: Changing";
        currentInterval = setInterval(changeColour, 400);
    }
};

let changeColour = () => {
    let newValues = generageRGBValues();
    document.getElementById("mainBG").style.backgroundColor = `rgb(${newValues[0]}, ${newValues[1]}, ${newValues[2]})`;
}

let generageRGBValues = () => {
    return [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
};
