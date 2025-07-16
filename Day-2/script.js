function toggleMode() {
  document.body.classList.toggle('light-mode');
}

// Confetti
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
  const colors = ['#FFC700', '#FF0000', '#2E3191', '#41BBC7'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 25 + 5,
      color: randomColor(),
      tilt: Math.floor(Math.random() * 10) - 5
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.d / 2);
    ctx.stroke();
  });

  updateConfetti();
}

function updateConfetti() {
  for (let i = 0; i < confetti.length; i++) {
    let c = confetti[i];
    c.y += Math.cos(0.01 + c.d) + 1 + c.r / 2;
    c.x += Math.sin(0.01);

    if (c.y > canvas.height) {
      confetti[i].y = -10;
      confetti[i].x = Math.random() * canvas.width;
    }
  }
}

function startConfetti() {
  createConfetti();
  setInterval(drawConfetti, 20);
}