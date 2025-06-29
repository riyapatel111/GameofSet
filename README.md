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
git clone https://github.com/riyapatel111/GameofSet.git

2. Open index.html in your browser

Technologies Used:

💻 JavaScript
💻 HTML
💻 CSS
 

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

## 👩‍💻 Responsibilities
I designed and developed this full-stack browser game, Game of Set, using JavaScript, HTML, and CSS.

## Divided tasks into 4 parts:

📊 Part 1: Built the game board, card UI, selection logic, and designed a clean user interface with intuitive instructions (index.html, gameBoard.js, gameConfig.js, cardUtils.js, style.css)

📊 Part 2: Added the timer, created the full hint system, and linked the player system to the scoring logic. Also refined the game loop (index.html, setLogic.js, gameTimer.js, style.css, playerCreator.js, cardUtils.js)

📊 Part 3: Created the player class, initial name/turn prompts, scoreboard display, and wrote the initial README (index.html, playerCreator.js, style.css)

📊️ Part 4: Developed the game loop, set logic, set validation, and scoring rules (cardUtils.js, gameConfig.js, setLogic.js, setValidation.js, script.js)

## 📕 My Responsibilities included:

📝 Game Board Design: Created a dynamic and responsive layout for displaying the game cards with intuitive styling and interaction logic

📝 Card Rendering Logic: Implemented randomized card generation with variation across attributes (shape, color, number, shading)

📝 User Interaction & Selection Logic: Built functionality for selecting and deselecting cards, validating selections, and visual feedback

📝 Game Loop & Turn Management: Developed the full game loop with multi-player turn tracking and conditional logic to control game state

📝 Scoring System: Implemented scoring rules to reward or penalize users based on the validity of selected sets

📝 Hint System: Designed and programmed a layered hint system that identifies and displays available sets on the board when requested

📝 Player Input & Scoreboard: Built modals for entering player names, tracked each player’s score, and highlighted the active player

📝 Timer Functionality: Added a real-time game timer to display the duration of gameplay and track final time at game end

📝 Start/End Game Logic: Developed logic to handle game initialization, reset, and ending, including final score display and winner announcement

📝 Modular Codebase: Organized the code into reusable and maintainable modules across multiple JavaScript files

📝 Styling & UI Design: Styled the game using CSS for a clean, accessible, and user-friendly interface

📝 Documentation: Authored the full README and project documentation to clearly describe the game, rules, features, and code structure

## Development History

Apr 4, 2025 – Final cleanup of the codebase and refactored game loop

Apr 4, 2025 – Updated layout for visual clarity and improved spacing

Apr 4, 2025 – Split core logic into modular JavaScript files for readability

Apr 4, 2025 – Fixed shape dimensions and standardized color/shape labels

Apr 4, 2025 – Added final game screen with winner display, duration, & score summary

Apr 4, 2025 – Adjusted UI prompt styling and modal positioning

Apr 3, 2025 – Implemented timer controls, modals for start/end game flow

Apr 3, 2025 – Enhanced hint bank to support multiple hint tiers

Apr 3, 2025 – Integrated scoring system with player management logic

Apr 2, 2025 – Developed the full hint system with hint box display

Apr 2, 2025 – Created hint button functionality with hint tracking

Apr 2, 2025 – Streamlined UI elements and adjusted hint box dimensions

Apr 2, 2025 – Removed unused player.js to simplify player logic

Apr 2, 2025 – Added game timer and implemented hint-related logic

Apr 1, 2025 – Designed the hint box UI and updated sidebar styling

Apr 1, 2025 – Built player setup prompts and display modals

Mar 31, 2025 – Implemented set-checking logic and scoring function

Mar 28, 2025 – Created player class for handling names and scores

Mar 26, 2025 – Developed card generation logic and selection UI framework
