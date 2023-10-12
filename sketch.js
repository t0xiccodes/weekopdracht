
let timerOn = false;
let m_Timer = 10;


function setup() {
  createCanvas(900, 800);

  let startButton = createButton('Start!');
    startButton.position(0, 0);
    startButton.mousePressed(startTimer);

  let stopButton = createButton('Stop');
    stopButton.position(40, 0);
    stopButton.mousePressed(stopTimer);

  let addTime5 = createButton('+5 min')
    addTime5.position(80, 0)
    addTime5.mousePressed(addTime5m)

  let addTime10 = createButton('+10 min')
    addTime10.position(120, 0)
    addTime10.mousePressed(addTime10m)

  let addTime25 = createButton('+25 min')
    addTime25.position(160, 0)
    addTime25.mousePressed(addTime25m)

  let addTime0 = createButton('0 min')
      addTime0.position(200, 0)
      addTime0.mousePressed(addTime0m)

}

function addTime25m()
{
  m_Timer += 1500;
}

function addTime5m()
{
  m_Timer += 300;
}

function addTime10m()
{
  m_Timer += 600;
}

function addTime0m()
{
  m_Timer = 0;
}

function startTimer()
{
  timerOn = true;
}

function stopTimer()
{
    timerOn = false; 
}

function draw() {
  background(220);
  line(450, 0, 450, 800)
  

  if(timerOn == true && m_Timer > 0)
  {
    m_Timer -= deltaTime / 1000;
  }
 

  let min = floor(m_Timer / 60)
  let sec = m_Timer - (min * 60)

  textSize(25);
  text(min + ":" + floor(sec), 650, 100);

  if(m_Timer < 1){
    timerOn = false;
  }

  
}