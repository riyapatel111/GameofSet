function isSet(card1, card2, card3) {
  function isValid(attr1, attr2, attr3) {
    return (
      (attr1 === attr2 && attr2 === attr3) ||
      (attr1 !== attr2 && attr2 !== attr3 && attr1 !== attr3)
    );
  }

  const shape1 = card1.getAttribute("data-shape");
  const shape2 = card2.getAttribute("data-shape");
  const shape3 = card3.getAttribute("data-shape");

  const shading1 = card1.getAttribute("data-shading");
  const shading2 = card2.getAttribute("data-shading");
  const shading3 = card3.getAttribute("data-shading");

  const color1 = card1.getAttribute("data-color");
  const color2 = card2.getAttribute("data-color");
  const color3 = card3.getAttribute("data-color");

  const count1 = card1.getAttribute("data-count");
  const count2 = card2.getAttribute("data-count");
  const count3 = card3.getAttribute("data-count");

  return (
    isValid(shape1, shape2, shape3) &&
    isValid(shading1, shading2, shading3) &&
    isValid(color1, color2, color3) &&
    isValid(count1, count2, count3)
  );
}

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
