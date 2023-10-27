let timerOn = false;
let m_Timer = 1500;
let coins = 0
let addCoin = 0;
let lastPassed = 0;
let backgroundImage; 
let sadFace;
let happyFace;
let neutralFace;
let concentratedFace;

let barWidth;
let barHeight = 50;
let barDecay = true;

function preload() {
  backgroundImage = loadImage('assets/bg.JPG'); 
  sadFace = loadImage('assets/sad.jpg');
  happyFace = loadImage('assets/happy.jpg')
  neutralFace = loadImage('assets/neutral.jpg');
  concentratedFace = loadImage('assets/concentrated.jpg');
}


function setup() {
  createCanvas(900, 800);
  frameRate(5)
  barWidth = 400;
  let startButton = createButton('Start!');
  startButton.position(500, 500);
  startButton.size(100, 100)
  startButton.mousePressed(startTimer);

  let stopButton = createButton('Stop');
  stopButton.position(750, 500);
  stopButton.size(100, 100)
  stopButton.mousePressed(stopTimer);

  let addTime5 = createButton('+5 min');
  addTime5.position(500, 700);
  addTime5.mousePressed(addTime5m);

  let addTime10 = createButton('+10 min');
  addTime10.position(600, 700);
  addTime10.mousePressed(addTime10m);

  let addTime25 = createButton('+25 min');
  addTime25.position(700, 700);
  addTime25.mousePressed(addTime25m);

  let addTime0 = createButton('0 min');
  addTime0.position(800, 700);
  addTime0.mousePressed(addTime0m);
  
  let shopItem1 = createButton('candy')
  shopItem1.position(0, 750);
  shopItem1.mousePressed(candy);

  let shopItem2 = createButton('nerf')
  shopItem2.position(60, 750)
  shopItem2.mousePressed(nerf);

  let shopItem3 = createButton('pizza')
  shopItem3.position(120, 750)
  shopItem3.mousePressed(pizza);

  let shopItem4 = createButton('toy')
  shopItem4.position(180, 750)
  shopItem4.mousePressed(toy);
}

function addTime25m() {
  m_Timer += 1500;
}

function addTime5m() {
  m_Timer += 300;
}

function addTime10m() {
  m_Timer += 600;
}

function addTime0m() {
  m_Timer = 0;
}

function startTimer() {
  timerOn = true;
  startTime = Date.now(); 
}

function stopTimer() {
  timerOn = false;
  barDecay = true;
}

function candy(){
  if (coins >= 2 && barWidth < 400){
    coins -= 2
    barWidth += 60
  }
}

function nerf(){
  if (coins >= 4 && barWidth < 400){
    coins -= 4
    barWidth += 120
  }
}

function pizza(){
  if (coins >= 6 && barWidth < 400){
    coins -= 6
    barWidth += 180
  }
}

function toy(){
  if (coins >= 8 && barWidth < 400){
    coins -= 8
    barWidth += 240
  }
}


function draw() {
  background(backgroundImage);

  line(450, 0, 450, 800);

  if (barWidth > 0 && barDecay == true && timerOn == false) {
    barWidth -= 0.1;
  }

  if (barWidth > 300){
    image(happyFace, 125, 300, 200, 200);
  }
  if (barWidth < 300){
    image(neutralFace, 125, 300, 200, 200);
  }
  if (barWidth < 100){
    image(sadFace, 125, 300, 200, 200);
  }
  
  fill(0, 150, 255);
  rect(160, height / 4 - barHeight / 2, barWidth / 3, barHeight);

  let min = floor(m_Timer / 60);
  let sec = m_Timer - (min * 60);


  if (timerOn == true && m_Timer > 1) {
    m_Timer -= deltaTime / 1000;
    barDecay = false;
    image(concentratedFace, 125, 300, 200, 200)
    let timePassed = Math.floor((Date.now() - startTime) / 1000); 
    if (timePassed % 60 == 0 && timePassed != lastPassed) {
      coins++;
      lastPassed = timePassed;
    }
  }



  textSize(25);
  fill(255)
  text(min + ":" + (floor(sec).toString().padStart(2, '0')), 600, 345);

  if (m_Timer < 1) {
    timerOn = false;
  }
  fill(255)
  textSize(25);
  text(coins, 650, 150);

}


