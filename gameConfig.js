// Game state variables
let time = 0;
let validSets = [];
let announcedSets = false;
let hintIndex = 0;
let hintStage = 0;
let hintedCards = {};
let usedHints = new Set();
let selectedCards = [];
let generatedCards = new Set();
let score = 0;

// Card attribute pools
const shapes = ['circle', 'square', 'diamond'];
const shadings = ['solid', 'striped', 'open'];
const colors = ['pink', 'green', 'purple'];

// randomly picks from an array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// tracks unique cards
function generateCardSignature(shape, shading, color, count) {
  return `${shape}-${shading}-${color}-${count}`;
}
