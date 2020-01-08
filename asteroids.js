let canvas ;
let ctx;
let canvasWidth = 1400;
let canvasHeight = 1000;
let keys =[];

document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetUpCanvas(){
    canvas = document.getElementById('my-canvas');
    
    ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width, canvas.height);


    document.body.addEventListener("keydown", function(e){
        keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", function(e){
        keys[e.keyCode] = false;
    });

Render();
   
}

class Ship{
    constructor(){
        this.visible = true;
        this.x = canvasWidth/2;
        this.y = canvasHeight/2;
        this.movingForward = false;
        this.speed = 0.1;
        this.velX = 0;
        this.velY = 0;
        this.rotationSpeed = 0.001;
        this.radius = 15;
        this.angle = 0;
        this.strokeColor = 'white';

    }

    Update(){
let radians = this.angle/ Math.PI * 180;
if (this.movingForward){
    this.velX += Math.cos(radians) * this.speed;
    this.velY += Math.sin(radians) * this.speed;
    //newX = oldX + cos(radians) * distance;
    //newY = oldY + cos(radians) * distance;

}
if(this.x < this.radius){
    this.x = canvas.width;
}
if(this.x > canvas.width){
    this.x = this.radius;
}
if(this.y < this.radius){
    this.y = canvas.height;
}
if(this.y > canvas.height){
    this.y = this.radius;
}
    }

}

let ship = new Ship();

function Render(){
        
}