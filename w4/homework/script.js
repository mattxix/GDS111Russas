    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Rectangle
    ctx.fillStyle = "yellow";
    ctx.fillRect(85,302,103,104);
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(85,302,103,104);

    //line
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.lineWidth = "5";
    ctx.beginPath();
    ctx.moveTo(85,682);
    ctx.lineTo(280,547);
    ctx.stroke();


    //Circle
    //(x, y, radius, start drawing, end drawing, falseClockwise trueClockwise)
    ctx.fillStyle = "#ffff00";
    ctx.strokeStyle = "red";
    ctx.lineWidth = "5";
    ctx.beginPath();
    ctx.arc(385,441,66,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    //Pentagon
    ctx.fillStyle = "#ff00ff";
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = "5";
    ctx.beginPath();
    ctx.moveTo(557,308);
    ctx.lineTo(667,284);
    ctx.lineTo(724,380);
    ctx.lineTo(650,464);
    ctx.lineTo(548,420);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //Star
    ctx.fillStyle = "#ffff00";
    ctx.strokeStyle = "rgb(32,32,32)";
    ctx.lineWidth = "5";
    ctx.beginPath();
    ctx.lineTo(635,496);
    ctx.lineTo(668,555);
    ctx.lineTo(733,567);
    ctx.lineTo(687,615);
    ctx.lineTo(695,680);
    ctx.lineTo(636,653);
    ctx.lineTo(576,680);
    ctx.lineTo(584,615);
    ctx.lineTo(539,567);
    ctx.lineTo(539,567);
    ctx.lineTo(603,555);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
