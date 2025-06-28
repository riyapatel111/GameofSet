class Player {
    constructor(name) {
        this._name = name;
        this._points = 0;
        this._hint = 0;
    }

    get name() {
        return this._name;
    }

    get points() {
        return this._points;
    }

    get hint() {
        return this._hint;
    }

    increasePoints(amount) {
        this._points += amount;
    }

    decreasePoints(amount) {
        this._points -= amount;
    }

    increaseHints() {
        if (this._hint < 3) {
            this._hint += 1;
        }
    }

   
    resetPoints() {
        this._points = 0;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const playerModal = document.getElementById("playerModal");
    const nameModal = document.getElementById("nameModal");
    const nameBtn = document.getElementById("nameBtn");
    const nextPlayerBtn = document.getElementById("nextPlayerBtn");

    const namePrompt = document.getElementById("namePrompt");
    const playerCountInput = document.getElementById("playerCount");
    const playerNameInput = document.getElementById("nameInput");

    const gameContent = document.getElementById("gameContent");
    const playerInfo = document.getElementById("playerInfo");

    let playerCount = 0;
    let players = [];
    let currentPlayerIndx = 0;

    function askNames() {
        playerCount = parseInt(playerCountInput.value);
        if (playerCount < 1) {
            alert("Please enter a valid number of players.");
            return;
        }
        playerModal.style.display = "none";
        nameModal.style.display = "flex";
        askNext();
    }

    function askNext() {
        if (currentPlayerIndx < playerCount) {
            namePrompt.innerText = `Enter Player ${currentPlayerIndx + 1} Name:`;
            playerNameInput.value = "";
            playerNameInput.focus();
        } else {
            startGame();
        }
    }

    function createPlayer() {
        const name = playerNameInput.value.trim();
        if (name.length < 1) {
            alert("Enter a valid name.");
            return;
        }

        let player = new Player(name);
        players.push(player);
        currentPlayerIndx++;
        askNext();
    }

    function playerDisplay() {
        players.forEach((player, index) => {
            let li = document.createElement("li");
            li.id = `${player.name}-${index}`;

            let name = document.createElement("strong");
            name.textContent = player.name;
            li.appendChild(name);

            let scoreText = document.createTextNode(`: ${player.points}`);
            li.appendChild(scoreText);

            playerInfo.appendChild(li);
        });
    }

    function startGame() {
        if (playerCount < 1) {
            alert("Please enter a valid number of players.");
            return;
        }

        nameModal.style.display = "none";
        gameContent.style.display = "block";
        playerDisplay();
        window.highlightCurrentPlayer(); // Highlight first player
        document.getElementById("startGameModal").style.display = "flex";
    }

    nameBtn.addEventListener("click", askNames);
    nextPlayerBtn.addEventListener("click", createPlayer);

    // Expose globally
    window.players = players;
    window.currentPlayerIndx = 0;

    window.updatePlayerScoreDisplay = function (index) {
        const player = players[index];
        const playerLi = document.getElementById(`${player.name}-${index}`);
        if (playerLi) {
            playerLi.innerHTML = `<strong>${player.name}</strong>: ${player.points}`;
        }
    };

    window.highlightCurrentPlayer = function () {
        const allPlayers = document.querySelectorAll("#playerInfo li");
        allPlayers.forEach(li => li.classList.remove("active-player"));

        const current = players[window.currentPlayerIndx];
        const li = document.getElementById(`${current.name}-${window.currentPlayerIndx}`);
        if (li) li.classList.add("active-player");
    };
});
