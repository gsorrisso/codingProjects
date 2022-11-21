function disapearButton(element){
    element.remove(element);
}

function giveAlert(val) {
    alert("You picked " + val);
}






var topDivPets = document.querySelector("#topPetNum");
topDivAmount = 3;
function increaseTopPetNum(){
    topDivAmount++;
    topPetNum.innerText = topDivAmount + " petting(s)";
}

var middleDivPets = document.querySelector("#middlePetNum");
middleDivAmount = 7;
function increaseMiddlePetNum(){
    middleDivAmount++;
    middlePetNum.innerText = middleDivAmount + " petting(s)";
}
var bottomDivPets = document.querySelector("#bottomPetNum");
bottomDivAmount = 2;
function increaseBottomPetNum(){
    bottomDivAmount++;
    bottomPetNum.innerText = bottomDivAmount + " petting(s)";
}