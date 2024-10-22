var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps =1000/60;
var timer = setInterval(game, fps);

var x = 50;
var y = canvas.height/2;
var w = 100;
var h = 100;
var moveAmmountX = 10;
var moveAmmountY = 10;

function game(){
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //update the canvas
    x+=moveAmmountX;
    y+=moveAmmountY;

    //colors
    var colors = [];
    colors[0] = `red`
    colors[1] = `blue`
    colors[2] = `green`
    colors[3] = `yellow`
    colors[4] = `cyan`
    colors[5] = `magenta`
    //draw our game objects
    ctx.fillStyle = colors[Math.round(Math.random()*2)];
    ctx.strokeStyle = colors[Math.round(Math.random()*3)];
    ctx.lineWidth = "50";
    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    if(x > canvas.width - 50){
        //make square stay in boundary of canvas
        moveAmmountX *= -1;
    }
    if(x < 50){
       
        moveAmmountX *= -1;
    }
    
    if(y < 50){
        
        moveAmmountY *= -1;
    }
    if(y > canvas.height - 50){
        
        moveAmmountY *= -1;
    }

}


