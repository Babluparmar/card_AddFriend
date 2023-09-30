var istatus = document.querySelector("h2");

var addfriend = document.querySelector("#add");
var removefriend = document.querySelector("#remove");
var cheak = 0;

addfriend.addEventListener("click", function(){
    if(cheak == 0){
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    addfriend.innerHTML = "Remove";
    addfriend.style.backgroundColor = "#dadada";
    addfriend.style.color = "#000";
    cheak = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addfriend.innerHTML = "Add friend";
        addfriend.style.backgroundColor = "rgb(90 230 33)";
        cheak = 0;
    }
})