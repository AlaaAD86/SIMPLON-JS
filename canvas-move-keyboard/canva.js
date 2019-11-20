let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keys = {};
    window.addEventListener('keydown', function (e) {
        keys[e.keyCode] = true;
        e.preventDefault();
});

window.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
});



let img = new Image();
img.src = "pomme.png";

img.onload = function (box) {
    ctx.drawImage(img,x,y);
}


function Box(options) {
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.width = options.width || 40;
    this.height = options.height || 50;
    this.color = options.color || 'pomme.png'
    this.speed = options.speed || 5;
    this.direction = options.direction || 'right';
}


let player = new Box({
    X: 100,
    y: 100,
    width: 10,
    height: 10,
    color: '#44bb11',
    speed: 10
});

function input(player) {
    if (37 in keys) {
        player.x -= player.speed;
        player.direction = 'left';
    }
    if (39 in keys) {
        player.x += player.speed;
        player.direction = 'right';
    }
    if (38 in keys) {
        player.y -= player.speed;
        player.direction = 'up';
    }
    if (40 in keys) {
        player.y += player.speed;
        player.direction = 'down';
    }
}


function drawBox(box) {
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
    ctx.drawImage(img, canvas.height/2, canvas.width/2);
}


function update() {
    input(player);
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox(player);
}

function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop);
}
loop();