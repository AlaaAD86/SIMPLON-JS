let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius * 0.90;

drawClock();

function drawClock(){
    drawFace(ctx, radius);
    drawNumber(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius){
    let grad;

    ctx.beginPath();
    ctx.arc(0,0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();


    grad = ctx.createRadialGradient (0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'grey');
    grad.addColorStop(1,'#333');

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0,0,radius * 0.1, 0 , 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumber(){
    let angle;
    let num;
    ctx.font = radius * 0.12 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num <= 12 ; num++){
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-angle);

        ctx.fillText(num.toString(), 0,0);
        ctx.rotate(angle);

        ctx.translate(0, radius * 0.85);
        ctx.rotate(-angle);
    }
}

function drawTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //HOURS

    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);

    //minute

    minute = minute%12;
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);


    //second

    second = second%12;
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

drawClock();
setInterval(drawClock, 1000);