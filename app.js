

document.querySelector('button').addEventListener("click", function(){
    var ranNum = (Math.random()*16777215).toString(16).slice(0,6);
    document.querySelector("body").style.backgroundColor = "#"+ ranNum;
});
