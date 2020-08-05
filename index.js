//For the shape
var start = new Date().getTime();

function getRGB() {
    const r = Math.round(Math.floor(Math.random() * 250));
    const g = Math.round(Math.floor(Math.random() * 255));
    const b = Math.round(Math.floor(Math.random() * 255));
    document.getElementById("shape").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btn1.onclick = function() {
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("shape").style.visibility = "visible";
    document.getElementById("scoreBoard").style.visibility = "hidden";
    appear();
}

btn2.onclick = function() {
    document.getElementById("scoreBoard").style.visibility = "visible";
    document.getElementById("shape").style.visibility = "hidden";
    document.getElementById("btn1").style.visibility = "visible";    
    document.getElementById("btn2").style.visibility = "hidden";
}

function appear() {
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

shape.onclick = function() {
    var size1 = Math.random() * 380;
    var size2 = Math.random() *100 + 5;
    document.getElementById("shape").style.display = "none";
    document.getElementById("shape").style.top = size1 + "px";
    document.getElementById("shape").style.left = size1 + "px";
    document.getElementById("shape").style.width = size2 + "px";
    document.getElementById("shape").style.height = size2 + "px";

    const end = new Date().getTime();
    const time = (end - start) / 1000;
    document.getElementById("time").innerText = time + "s";
    appear();
    getRGB();
}

setTimeout(appear,Math.random() * 3000);
