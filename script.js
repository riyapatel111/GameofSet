document.addEventListener("DOMContentLoaded", () => {
  // Initialize board
  initializeBoard();

  // Hook up buttons
  const checkSetButton = document.getElementById('checkSetBtn');
  if (checkSetButton) {
    checkSetButton.addEventListener('click', checkSet);
  }

  const restartButton = document.getElementById('restartBtn');
  if (restartButton) {
    restartButton.addEventListener('click', renderBoard);
    time = 0;
  }

  const hintButton = document.getElementById("hintBtn");
  if (hintButton) {
    hintButton.addEventListener("click", giveHint);
  }

  const endGameButton = document.getElementById("endGameBtn");
  if (endGameButton) {
    endGameButton.addEventListener("click", showEndGame);
  }

  const startGameBtn = document.getElementById("startGameBtn");
  if (startGameBtn) {
    startGameBtn.addEventListener("click", () => {
      document.getElementById("startGameModal").style.display = "none";
      intervalId = setInterval(timer, 1000);
    });
  }
});
