//declaring scores and time globally due to it being used locally in many functions
var score = 0;
var start = new Date().getTime();

//what to display when the game starts
document.getElementById("btn1").onclick = function() {
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("shape").style.visibility = "visible";
    document.getElementById("scoreBoard").style.visibility = "hidden";
    document.getElementById("react-time").style.visibility = "visible";
    appear();
}

//to make the shape appears after each clicks
function appear() {
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

//to get different colors of background shapes
function getRGB() {
    const r = Math.round(Math.floor(Math.random() * 250));
    const g = Math.round(Math.floor(Math.random() * 255));
    const b = Math.round(Math.floor(Math.random() * 255));
    document.getElementById("shape").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//the main look, length that the game will cover, time of each click
document.getElementById("shape").onclick = function() {
    var size1 = Math.random() * 320;
    var size2 = Math.random() * 100 + 5;
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

    //limiting the time before game ends
    if(time < 2) {
        score += 1;
        document.getElementById("scores").innerText = score;

    }
    else {
        gameOver();
    }
}



//calling the gameOver function when the end game button is clicked
document.getElementById("btn2").onclick = function() {
    gameOver();
}

//what to display when the game ends
function gameOver() {
    document.getElementById("scoreBoard").style.visibility = "visible";
    document.getElementById("shape").style.visibility = "hidden";    
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "visible";
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("react-time").style.visibility = "hidden";
    document.getElementById("totalScore").innerHTML = score;
}



//when the game restart
document.getElementById("btn3").onclick = function() {
    restart();
}

//calling the restart function
function restart() {
    document.location.href = "";
}

//claculating the time in milliseconds on each click
setTimeout(appear,Math.random() * 3000);
