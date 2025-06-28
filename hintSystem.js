function getValidSets() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const sets = [];

  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const card1 = cards[i];
        const card2 = cards[j];
        const card3 = cards[k];
        if (isSet(card1, card2, card3)) {
          sets.push([card1, card2, card3]);
        }
      }
    }
  }

  return sets;
}

function giveHint() {
  validSets = getValidSets();

  if (validSets.length === 0) {
    alert("No valid sets on the table!");
    return;
  }

  if (!announcedSets) {
    alert(`There are ${validSets.length} valid set(s) on the board.`);
    announcedSets = true;
    return;
  }

  if (!hintedCards[hintIndex]) {
    hintedCards[hintIndex] = new Set();
  }

  const set = validSets[hintIndex];
  let nextCardIndex = [0, 1, 2].find(i => !hintedCards[hintIndex].has(i));

  if (nextCardIndex === undefined) {
    hintIndex = (hintIndex + 1) % validSets.length;
    const allHinted = validSets.every((_, idx) =>
      hintedCards[idx] && hintedCards[idx].size === 3
    );

    if (allHinted) {
      alert("You’ve received hints for every card in every valid set!");
      return;
    }

    giveHint(); // recursively try the next one
    return;
  }

  const card = set[nextCardIndex];
  const hint = `Hint for card #${nextCardIndex + 1} in Set #${hintIndex + 1}: ${describeCard(card)}`;
  hintedCards[hintIndex].add(nextCardIndex);
  addHintToBank(hint);
}

function addHintToBank(hintText) {
  const hintBox = document.getElementById('hintBox');
  const hintElement = document.createElement('p');
  hintElement.className = 'hint-text';
  hintElement.textContent = hintText;
  hintBox.appendChild(hintElement);
}

function clearHintBank() {
  const hintBox = document.getElementById('hintBox');
  hintBox.innerHTML = '<b> <p class="hint-text"> Hint Bank:</p></b>';
}

function describeCard(card) {
  const rawShape = card.getAttribute("data-shape");
  const shading = card.getAttribute("data-shading");
  const rawColor = card.getAttribute("data-color");
  const count = card.getAttribute("data-count");

  const shapeMap = {
    rectangle: "square",
    square: "square",
    circle: "circle",
    diamond: "diamond"
  };

  const colorMap = {
    blue: "green",
    pink: "pink",
    purple: "purple"
  };

  const shape = shapeMap[rawShape] || rawShape;
  const color = colorMap[rawColor] || rawColor;

  return `${count} ${shading} ${color} ${shape}(s)`;
}

document.getElementById("hintBtn").addEventListener("click", giveHint);
window.clearHintBank = clearHintBank;
