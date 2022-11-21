// top nav bar alerts for cities
function weatherAlertBurbank(){
    alert("You clicked Burbank!");
}
function weatherAlertChicago(){
    alert("You clicked Chicago!");
}
function weatherAlertDallas(){
    alert("You clicked Dallas!");
}

// bottom prompt at footer
function removeDiv(){
    x=document.querySelector(".footer");
    x.remove();
}

// on select, change degrees to celcius
// create a variable that does the equation

function changeToCelsius(){
    var x = document.querySelector(".displayedTemps");
    var y = ((x+32)*.556);
    x.innerText = y;
}

