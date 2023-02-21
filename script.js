const player = document.getElementById('player');
const target = document.getElementById('target');
let score = 0;

function movePlayer(event) {
  if (event.key === 'ArrowLeft') {
    player.style.left = parseInt(player.style.left) - 10 + 'px';
  } else if (event.key === 'ArrowRight') {
    player.style.left = parseInt(player.style.left) + 10 + 'px';
  }

  if (checkCollision()) {
    score++;
    document.getElementById('score').textContent = score;
    moveTarget();
  }
}

function moveTarget() {
  target.style.top = Math.random() * 350 + 'px';
  target.style.right = Math.random() * 350 + 'px';
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  
  return !(
    playerRect.bottom < targetRect.top || 
    playerRect.top > targetRect.bottom || 
    playerRect.right < targetRect.left || 
    playerRect.left > targetRect.right
  );
}

document.addEventListener('keydown', movePlayer);
