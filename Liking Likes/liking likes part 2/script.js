// top div counter
var topDivLikes = document.querySelector("#top-div-likes");
topDivAmount = 9;
function increaseTopLikes(){
    topDivAmount++;
    topDivLikes.innerText = topDivAmount + " like(s)";
}

// middle div counter 
var middleDivLikes = document.querySelector("#middle-div-likes");
middleDivAmount = 12;
function increaseMiddleLikes(){
    middleDivAmount++;
    middleDivLikes.innerText = middleDivAmount + " like(s)";
}
// bottom div counter
var bottomDivLikes = document.querySelector("#bottom-div-likes");
bottomDivAmount = 9
function increaseBottomLikes(){
    bottomDivAmount++;
    bottomDivLikes.innerText = bottomDivAmount + " like(s)";
}