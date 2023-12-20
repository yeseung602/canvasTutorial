const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const imgOcean = document.getElementById('ocean');
ctx.drawImage(imgOcean, 0, 0);

let y=0;
let speed = 0;
let accleration = 10;

let lastTimestamp = null;

function draw(timestamp){
  if(!lastTimestamp) lastTimestamp = timestamp;
  let timeDiff = (timestamp - lastTimestamp) / 1000;
  speed += accleration * timeDiff;
  y += speed*timeDiff;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(y>canvas.height - imgOcean.height){
  y = canvas.height - imgOcean.height
  speed = -speed*0.7;
  }
  ctx.drawImage(imgOcean, 0, y);
  console.log(y)

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);