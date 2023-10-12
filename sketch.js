let timerOn = false;
let m_Timer = 10;

const drawGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

const colors = {
  0:  "#000",
  1:  "#FFF",
  2:  "#E3320C",
  3:  "#003CFF",
  4:  "#008FFF",
  5:  "#A51A09",
  6:  "#13FF00",
  7:  "#FB00FF",
  8:  "#0004FF",
  9:  "#FFF000",
  10: "#FF8000"
};

function setup() {
  // Adjust the canvas size to be centered
  createCanvas(900, 800);
  const canvasCenterX = width / 2;
  const canvasCenterY = height / 2;

  let startButton = createButton('Start!');
  startButton.position(0, 0);
  startButton.mousePressed(startTimer);

  let stopButton = createButton('Stop');
  stopButton.position(40, 0);
  stopButton.mousePressed(stopTimer);

  let addTime5 = createButton('+5 min');
  addTime5.position(80, 0);
  addTime5.mousePressed(addTime5m);

  let addTime10 = createButton('+10 min');
  addTime10.position(120, 0);
  addTime10.mousePressed(addTime10m);

  let addTime25 = createButton('+25 min');
  addTime25.position(160, 0);
  addTime25.mousePressed(addTime25m);

  let addTime0 = createButton('0 min');
  addTime0.position(200, 0);
  addTime0.mousePressed(addTime0m);
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
}

function stopTimer() {
  timerOn = false;
}

let pixelOffsetX = 0;
let pixelOffsetY = 0;

function draw() {
  // Clear the background
  background(220);

  // Calculate the center of the canvas
  const canvasCenterX = width / 2;
  const canvasCenterY = height / 2;

  line(canvasCenterX, 0, canvasCenterX, height);

  if (timerOn == true && m_Timer > 0) {
    m_Timer -= deltaTime / 1000;
  }

  let min = floor(m_Timer / 60);
  let sec = m_Timer - (min * 60);

  textSize(25);
  text(min + ":" + floor(sec), canvasCenterX + 200, 100);

  if (m_Timer < 1) {
    timerOn = false;
  }

  // Calculate the offset to center the grid
  const gridCenterX = canvasCenterX - (drawGrid[0].length * (10 + pixelOffsetX)) / 2;
  const gridCenterY = canvasCenterY - (drawGrid.length * (10 + pixelOffsetY)) / 2;

  for (let i in drawGrid) {
    const row = drawGrid[i];
    for (let j in row) {
      const col = row[j];
      fill(colors[col]);
      rect(gridCenterX + j * (10 + pixelOffsetX), gridCenterY + i * (10 + pixelOffsetY), 10, 10);
    }
  }
}