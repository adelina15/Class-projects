// References found at p5js.org

// Add your variables here

function changeColor(oldColor) {
    if(oldColor=='blue') {
        fill(0,255,0) ; 
        return 'green';
    } else {
       fill(0,0,255);
        return 'blue';
    }
    
   
}

// initialize your program here
function setup() {
    createCanvas(500, 500);
    
}

var myColor= 'green';



// Essentially a repeat command
function draw() {
  rect(0,0, width,height);  

}
function mouseClicked() {
myColor=changeColor(myColor);
}