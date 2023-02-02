const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// instantiate canvas for animating and make it the right dimensions
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// instantiate the playerImage and link file
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
// create a generic width and height for the sprite
const spriteWidth = 575;
const spriteHeight = 523;

// global variables for frames
let frameX = 0;
let frameY = 0;

// slow it down
let gameFrame = 0;
const staggerFrames = 5;

// creating a data array for the sprite animations
spriteAnimations = [
    "idle" = 
]
/* original code with rectangle

let x = 0;
 function animate(){    
    // making sure to clear the canvas every time you animate something new
    // clearRect will clear, 4 variables set the area to clear
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // creating an object to animate
    // first two variables are location
    ctx.fillRect(x, 50, 100, 100);
    // adds one to the x variable above after each loop
    x++;
    
    // makes an animation frame and calls once
    // if you pass the parent it will loop.
    requestAnimationFrame(animate);
};
//calling the function
animate(); */

// code using sprite image
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100);
    //inserts image, takes 5 arguments which includes width and height.
    //third version takes 9 arguments
    // image, then next 4 are cutouts first by position then height and width
    // then where on the canvas to draw the image to
    //ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);

    /* Basic Anim
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0){
        if (frameX < 6) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate); */

    //more advanced animation
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    

    gameFrame++;
    requestAnimationFrame(animate);
};
//calling the function
animate();