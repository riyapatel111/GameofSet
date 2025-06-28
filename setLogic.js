function checkSet() {
  if (selectedCards.length !== 3) {
    alert('You must select exactly 3 cards to check for a Set!');
    return;
  }

  const properties = selectedCards.map(card => {
    const shape = card.querySelector('.shape').classList[1];
    const shading = card.querySelector('.shape').classList[2];
    const color = card.querySelector('.shape').classList[3];
    const count = card.children.length;
    return { shape, shading, color, count };
  });

  const isSet = ['shape', 'shading', 'color', 'count'].every(prop => {
    const values = properties.map(card => card[prop]);
    return new Set(values).size === 1 || new Set(values).size === 3;
  });

  const board = document.getElementById('gameBoard');
  let currentPlayer = window.players[window.currentPlayerIndx];

  if (isSet) {
    alert('Valid Set!');
    currentPlayer.increasePoints(10);
    window.updatePlayerScoreDisplay(window.currentPlayerIndx);

    selectedCards.forEach(card => {
      const newCard = createUniqueCard(generatedCards);
      board.replaceChild(newCard, card);
    });

    selectedCards = [];
    validSets = [];
    announcedSets = false;
    hintIndex = 0;
    hintedCards = {};
    clearHintBank();
  } else {
    alert('Not a valid Set!');
    currentPlayer.decreasePoints(5);
    window.updatePlayerScoreDisplay(window.currentPlayerIndx);

    selectedCards.forEach(card => card.classList.remove('selected'));
    selectedCards = [];
  }

  window.currentPlayerIndx = (window.currentPlayerIndx + 1) % window.players.length;
  window.highlightCurrentPlayer();
}

const checkSetButton = document.getElementById('checkSetBtn');
if (checkSetButton) {
  checkSetButton.addEventListener('click', checkSet);
}

function showEndGame() {
  const modal = document.getElementById("endGameModal");
  const list = document.getElementById("finalScoresList");
  list.innerHTML = '';

  clearInterval(intervalId);

  let maxScore = -Infinity;
  let winners = [];

  window.players.forEach(player => {
    if (player.points > maxScore) {
      maxScore = player.points;
      winners = [player.name];
    } else if (player.points === maxScore) {
      winners.push(player.name);
    }
  });

  const resultHeader = document.createElement("h3");
  resultHeader.style.marginBottom = "10px";
  if (winners.length === 1) {
    resultHeader.textContent = `Winner: ${winners[0]}!`;
  } else {
    resultHeader.textContent = `It's a tie between: ${winners.join(" & ")}`;
  }
  modal.querySelector('.modal-content').prepend(resultHeader);

  window.players.forEach(player => {
    const li = document.createElement("li");
    li.textContent = `${player.name}: ${player.points} points`;
    list.appendChild(li);
  });

  const timeElement = document.createElement("p");
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timeElement.textContent = `Game Duration: ${minutes}:${seconds}s`;
  timeElement.style.marginTop = "20px";
  modal.querySelector('.modal-content').appendChild(timeElement);

  modal.style.display = "flex";
}

function playAgain() {
  location.reload();
}

window.playAgain = playAgain; 
