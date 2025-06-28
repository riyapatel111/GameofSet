# GameofSet

### Project Title:
Game of Set (JavaScript Implementation)  
By: Riya Patel

---

## 📝 Project Description

This project is a browser-based version of the card game Set, built with JavaScript, HTML, and CSS.

### 🎮 Game Rules

A set is a group of 3 cards where each attribute—shape, count, shading, and color—is either all the same or all different across all three cards.

Players take turns picking what they believe is a valid set. After selecting three cards, they click "Check Set" to see if they’re right.

- ✅ Correct set: +10 points  
- ❌ Incorrect set: -5 points  
- 💡 Need help? Use the "Get a Hint" button for help identifying how many valid sets are on the board and which cards make up a set. Or restart the game to get a fresh set of cards.

---

## ✨ Features

- 🧍‍♀️ **Initial Player Prompts** — Enter number of players and their names at game start
- 📊 **Scoreboard** — Tracks player scores and highlights the current turn
- ⏱️ **Timer** — Displays how long the game has been running
- ✔️ **Check Set Button** — Verifies the selected cards and updates score
- 💡 **Get Hint Button** — Offers layered clues about valid sets on the board
- 📦 **Hint Box** — Displays detailed hints
- 🔄 **Restart Button** — Resets the entire game state
- 🛑 **End Game Button** — Displays final scores, winner, and game time

---

## 🚀 How to Run the Game

1. Clone the repository:
git clone https://github.com/CSE3901-SP25-11309/project3-group2.git

2. Open index.html in your browser

Technologies Used:

- JavaScript
- HTML
- CSS

Project Structure:

├── cardUtils.js

├── gameBoard.js

├── gameConfig.js

├── gameTimer.js

├── hintSystem.js

├── playerCreator.js

├── script.js

├── setLogic.js

├── setValidation.js

├── index.html

├── style.css


Contributors & Responsibilities:

- Layan – Built the game board, card UI, selection logic, and designed a clean user interface with intuitive instructions (index.html, gameBoard.js, gameConfig.js, cardUtils.js, style.css)

- Fatuma – Added the timer, created the full hint system, and linked the player system to the scoring logic. Also refined the game loop (index.html, setLogic.js, gameTimer.js, style.css, playerCreator.js, cardUtils.js)

- Ben – Created the player class, initial name/turn prompts, scoreboard display, and wrote the initial README (index.html, playerCreator.js, style.css)

- Riya – Developed the game loop, set logic, set validation, and scoring rules (cardUtils.js, gameConfig.js, setLogic.js, setValidation.js, script.js)

Development History

Apr 4, 2025 – Final clean up of the code (filmi7873)  
Apr 4, 2025 – Updated layout to look cleaner (filmi7873)  
Apr 4, 2025 – Split logic into separate JavaScript files (layanax)  
Apr 4, 2025 – Updated shape and color names, fixed shape dimensions (layanax)  
Apr 4, 2025 – Added winner message, game duration, and final scores, fixed some card generation logic (layanax)  
Apr 4, 2025 – Fixed prompt background (benvarkey222)  

Apr 3, 2025 – Merge branch 'main' of https://github.com/CSE3901-SP25-11309/project3-group2 (benvarkey222)  
Apr 3, 2025 – Added and fixed timer controls, modals for start/end game, and full game state handling (layanax)  
Apr 3, 2025 – Edited the hint bank (filmi7873)  
Apr 3, 2025 – Updated main with player points linked (filmi7873)  
Apr 3, 2025 – Merge pull request #8 from CSE3901-SP25-11309/b.varkey (filmi7873)  
Apr 3, 2025 – Merge branch 'main' into b.varkey (filmi7873)  

Apr 2, 2025 – Add hint bank feature and single-card hint system (filmi7873)  
Apr 2, 2025 – Merge pull request #6 from CSE3901-SP25-11309/fatuma (filmi7873)  
Apr 2, 2025 – Merge branch 'main' into fatuma (filmi7873)  
Apr 2, 2025 – Merge pull request #5 from CSE3901-SP25-11309/riya (filmi7873)  
Apr 2, 2025 – Merge branch 'main' into riya (filmi7873)  
Apr 2, 2025 – Minor update to hint box sizing (layanax)  
Apr 2, 2025 – Merge pull request #2 from CSE3901-SP25-11309/b.varkey (benvarkey222)  
Apr 2, 2025 – Merge branch 'main' into b.varkey (benvarkey222)  
Apr 2, 2025 – Merge pull request #1 from CSE3901-SP25-11309/riya (filmi7873)  
Apr 2, 2025 – Removed player.js (benvarkey222)  
Apr 2, 2025 – Created the hint button and the logic behind it. Also added Timer to the game. (filmi7873)  

Apr 1, 2025 – Added hint box and updated sidebar styling, replaced original colors (layanax)  
Apr 1, 2025 – Made player class and pop ups (benvarkey222)  

Mar 31, 2025 – Merge remote-tracking branch 'origin/layan' into b.varkey (benvarkey222)  
Mar 31, 2025 – Wrote check set and score (riyapatel111)  

Mar 28, 2025 – Added player.js (benvarkey222)  

Mar 26, 2025 – Added card generation and selection logic and placeholders for future buttons (layanax)  

