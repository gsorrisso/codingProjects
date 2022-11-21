// onclick removes top image and name only
function removeTopUser(){
    var x= document.getElementById("topdiv");
    x.remove();
}

// onclick this removes bottom image and name only
function removeBottomUser(){
    var x= document.getElementById("bottomdiv");
    x.remove();
}

// onclick this changes profile name
function changeName(){
    var x= document.getElementById("usercardbody")
    x.querySelector(".profileName").innerHTML = "Smokey the Bear"
}

// decrease request number
function decreaseNum(){
    var numOfRequests = document.querySelector(".requestAmount");
    numOfRequests.innerText--;
}

// deletes check mark and x div and decreases connection requests 
function topUserDeny(){
    removeTopUser();
    decreaseNum(); 
}
function topUserAccept(){
    increaseConnections();
    removeTopUser();
    decreaseNum(); 
}











// gets rid of div and decreases connection request
function bottomUserDeny(){
    removeBottomUser();
    decreaseNum(); 
}
// gets rid of div and INCREASES # OF FRIENDS
function bottomUserAccept(){
    increaseConnections();
    removeBottomUser();
    decreaseNum(); 
}

function increaseConnections(){
    var numOfConnections = document.querySelector(".numberOfConnections");
    numOfConnections.innerText++;
}

