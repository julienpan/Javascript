var myCanvas,
    ctx,
    W = window.innerWidth,
    H = window.innerHeight;

var img1 = new Image(),
    img2 = new Image();

img1.src = "css/images/1.jpg";
img2.src = "css/images/2.jpg";

var W = window.innerWidth;
var H = window.innerHeight;

function init(){
    var xPos = 0;
    var yPos = 0;
    var save = xPos;

    myCanvas = document.getElementById('canvas');
    ctx = myCanvas.getContext('2d');
    myCanvas.style.position = "absolute";
    myCanvas.width = W;
    myCanvas.height = H;
    ctx.drawImage(img1, 0, 0, W, H);
    myCanvas.addEventListener('click', function transition(e){
        var A, B;
        A = 50;
        B = -50;
        var x = e.layerX; //Math.floor(e.x * W / parseInt(W));
        var y = e.layerY;//Math.floor(e.y * H / parseInt(H));
        //console.log('x : ' + x + ', y : ' + y);
        //var setIntervalId = setInterval(function(){
        ctx.clearRect(xPos, yPos, 50, 50);
        ctx.drawImage(img2, xPos, yPos, 50, 50, xPos, yPos, 50, 50);
        //ctx.beginPath();
        xPos += 50;
        if(xPos > W){
            console.log('y++');
            yPos += 50;
            xPos = save;  
        }
        if(yPos > H){
            console.log('max y');
            //cancelAnimationFrame(transition);
            return;
        }
            //ctx.drawImage(img2, xPos, yPos, 50, 50);
            //ctx.stroke();
            //ctx.closePath();
        //}, 1000/60);
        requestAnimationFrame(transition);
    }, true);
}

        /*var frame = 0;
        setInterval(function(){
            frame++;
            while(frame < 10){
                
                ctx.clearRect(x, y, A, A);
                var step1 = setTimeout(function(){
                    ctx.clearRect(x, y, B, B);
                }, 500);
                var step2 = setTimeout(function(){
                    ctx.clearRect(x, y, A, B);
                }, 1000);
                var step3 = setTimeout(function(){
                    ctx.clearRect(x, y, B, A);
                }, 1500);
                frame++;

                console.log(frame);
            }

        }, 1000/60);*/

        /*ctx.fillStyle = "#F00";
        ctx.fillRect(x, y, 50, 50);*/
    
    //requestAnimationFrame(transition);


/*function transition(data){
    for(var i = 0; i < data.length; i++){
        data[i] = 255;
    }
}

function onClick(){
    var imageData = ctx.getImageData(0, 0, W, H);
    
    transition(imageData.data);
}*/

window.addEventListener('load', init);
