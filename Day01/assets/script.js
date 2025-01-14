
// Color changer js code

const changer =document.querySelector(".btn");
changer.addEventListener("click", function(){
    const inputCng=document.querySelector(".colors").value;
    document.body.style.backgroundColor=inputCng;
})
