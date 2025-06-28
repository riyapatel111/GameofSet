let intervalId = null;

function timer() {
  time += 1;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  const timerElement = document.getElementById('timer');
  timerElement.textContent = `Game Duration: ${formattedMinutes}:${formattedSeconds}s`;
}

function resetTimer() {
  time = 0;
  clearInterval(intervalId);
  intervalId = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function getFormattedTime() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}s`;
}
