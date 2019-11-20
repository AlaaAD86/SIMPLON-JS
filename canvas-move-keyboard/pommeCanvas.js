window.onload = function () {
    
    var x = innerWidth/2;
    var y = innerHeight/2;
    let key, pos = 0;

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, x, y);
    }
    img.src = "pomme.png";


    document.onkeydown = function (e) {
        pos = 1;
        key = window.event ? e.keyCode : e.which;
   
    }


    document.onkeyup = function (e) { 
        pos = 0;
 
    }


    setInterval(move, function () {

        if (pos == 0){
            return;
        }
        if (key == 37){
            x -= 5
        }
        
        if (key == 38) {
            y -= 5
        }
        if (key == 39) {
            x += 5
        }
        if (key == 40) {
            y += 5
        }

        canvas.width = canvas.width;
        ctx.drawImage(img, x, y);
 
    
    } , 5);


}

// function resize(){
//     canvas.height.ctx = window.innerHeight;
//     canvas.width.ctx = window.innerWidth;
// }
// window.onresize = resize;


