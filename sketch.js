let capture;
let font;

function preload() {
  font = loadFont('Asset/Courier.otf');
}

function setup() {
  createCanvas(640, 480, WEBGL);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  noStroke();

  fill(0,0,255);
  textSize(20);
  textFont(font);
  textAlign(CENTER, CENTER);

}


function draw() {

  background(255);
  image(capture, -320, -240, 640, 480);
  //filter(INVERT);
 // image(capture,0, -480, 640, 480);
  let date = "Apr.25th - Apr.30st"
  let loc = "Bard Fisher Studio Art Building Entrance Hall"
  let title="Shuang Cai"

  
  if (mouseX > 320 && mouseY<200) {
    push();
    fill(0,0,0,90);
    translate(100, -100, 60);
    rotateY(PI);
    box(textWidth(date)+30, 160, 10);
    translate(0,-50,-20);
    fill(0,255,0);
    rotateY(PI);
    text(date, 0,0);
    text(loc,-105,-20,textWidth(date),150)
    text(title,-110,30,textWidth(date),150)
    
  }else{
    let time = millis();
    push();
    translate(100, -150, 100)
    
    rotateX((time+mouseX) / 1000);
    rotateZ((time+mouseY) / 1234);
    rotateY(1)
    fill(0,0,0,90);
    translate(0, 50, -10)
    box(textWidth(date)+10, 150, 10)
    fill(0,0,255)
    translate(0,-50,15)
    text(date, 10, 0);
    text(loc,-110,-20,textWidth(date),150)
    text(title,-110,30,textWidth(date),150)
   
    fill(255,0,0);
    translate(0,100,-30)
    rotateX(PI);
    text(date, 0, 0)
    text(loc,-110,-20,textWidth(date),150)
    text(title,-110,30,textWidth(date),150)
    pop();
  }

}
