var likeCounter = document.querySelector("#likes")
likeAmount = 3
function increaseLikes(){
    likeAmount++;
    likeCounter.innerText = likeAmount + " like(s)"
}