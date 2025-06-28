// Create a card that is guaranteed to be unique
function createUniqueCard(usedCardsSet) {
  let shape, shading, color, count, signature;

  do {
    shape = getRandomItem(shapes);
    shading = getRandomItem(shadings);
    color = getRandomItem(colors);
    count = Math.floor(Math.random() * 3) + 1;
    signature = generateCardSignature(shape, shading, color, count);
  } while (usedCardsSet.has(signature));

  usedCardsSet.add(signature);

  const card = document.createElement('div');
  card.className = 'card';

  card.setAttribute("data-shape", shape);
  card.setAttribute("data-shading", shading);
  card.setAttribute("data-color", color);
  card.setAttribute("data-count", count);

  for (let i = 0; i < count; i++) {
    const shapeDiv = document.createElement('div');
    shapeDiv.classList.add('shape', shape, shading, color);
    card.appendChild(shapeDiv);
  }

  card.addEventListener('click', () => toggleCardSelection(card));
  return card;
}

// Handle card selection toggle
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
