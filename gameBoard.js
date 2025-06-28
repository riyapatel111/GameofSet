function initializeBoard() {
  const board = document.getElementById('gameBoard');
  let hasValidSet = false;

  do {
    board.innerHTML = '';
    selectedCards = [];
    generatedCards = new Set(); // reset global

    for (let i = 0; i < 12; i++) {
      const card = createUniqueCard(generatedCards);
      board.appendChild(card);
    }

    validSets = getValidSets(); // check if any sets exist
    hasValidSet = validSets.length > 0;

  } while (!hasValidSet);

  announcedSets = false;
  hintIndex = 0;
  hintedCards = {};
  clearHintBank();
}

function renderBoard() {
  initializeBoard();

  if (window.players && Array.isArray(window.players)) {
    window.players.forEach(player => {
      if (typeof player.resetPoints === 'function') {
        player.resetPoints();
      }
    });

    window.players.forEach((_, index) => {
      window.updatePlayerScoreDisplay(index);
    });

    window.currentPlayerIndx = 0;
    window.highlightCurrentPlayer();
  }

  time = 0;
  clearInterval(intervalId);
  intervalId = setInterval(timer, 1000);
}

function toggleCardSelection(cardElement) {
  const isSelected = cardElement.classList.contains('selected');

  if (isSelected) {
    cardElement.classList.remove('selected');
    selectedCards = selectedCards.filter(c => c !== cardElement);
  } else {
    if (selectedCards.length < 3) {
      cardElement.classList.add('selected');
      selectedCards.push(cardElement);
    }
  }
}

document.getElementById("restartBtn").addEventListener("click", renderBoard);
