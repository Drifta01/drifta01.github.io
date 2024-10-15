export default function ticTacToe() {
const log = console.log;

function domElements() {
  const cells = Array.from(document.getElementsByClassName("tttCell"));
  const resetButton = document.getElementById("resetButton");
  const gameMessage = document.getElementById("gameMessage");
  const nextPlayerMessge = document.getElementById("nextPlayerMessge");
  const [player1, player2] = document.getElementsByClassName("players");

  resetButton.addEventListener("click", handleResetGame);

  return {
    cells,
    resetButton,
    nextPlayerMessge,
    gameMessage,
    player1,
    player2,
  };
}

const game = {
  board: new Array(9).fill(null),
  player: 1,
  players: { 0: "O", 1: "X" },
  playerNames: ["Player one", "Player two"],
  over: false,
};

const { cells, nextPlayerMessge, player1, player2 } = domElements();

const setNextPlayerMessage = function () {
  console.log("player", game.player);
  if (game.player === 0) {
    gameMessage.innerHTML = `Its ${game.playerNames[0]}'s turn`;
  } else if (game.player === 1) {
    gameMessage.innerHTML = `Its ${game.playerNames[1]}'s turn`;
  } else {
    gameMessage.innerHTML = "Opps";
  }
};

const handlePlayerTurn = function (evt) {
  if (game.over) return;
  updateBoardState(cells.indexOf(evt.currentTarget));
};

domElements().cells.forEach((cell) =>
  cell.addEventListener("click", handlePlayerTurn)
);

const updateBoardState = function (index) {
  const { board, player } = game;
  if (board[index] === null) {
    board[index] = game.players[player];
    game.player = Number(!player);
    updateGrid(index);
    checkGameStatus(player);
  }
  };

  const updateGrid = function (index) {
    cells[index].textContent = game.player === 0 ? "X" : "0";
    setNextPlayerMessage();
  };

  function checkStaleMate(message) {
    return game.board.every((cell) => cell != null) ? true : false;
  }

  function checkGameStatus(player) {
    if (checkForWin(player)) {
      gameMessage.innerHTML = `${game.playerNames[player]} Wins !`;
      game.over = true;
    }
    if (checkStaleMate()) {
      gameMessage.innerHTML = "Tied Game";
      game.over = true;
    }
  }

  function handleResetGame() {
    gameMessage.innerHTML = "Player one starts";
    game.board = new Array(9).fill(null);
    cells.forEach((c) => (c.textContent = ""));
    game.over = false;
    game.player = 0;
  }

  function checkForWin(player) {
    let [a, b, c, d, e, f, g, h, i] = game.board.map((cell) =>
      cell === game.players[player] ? true : false
    );

    //check rows
    if ((a && b && c) || (d && e && f) || (g && h && i)) {
      return true;
    }
    //check columns
    if ((a && d && g) || (b && e && h) || (c && f && i)) {
      return true;
    }

    //diagonals
    if ((a && e && i) || (g && e && c)) {
      return true;
    }

    return false;
  }

  handleResetGame();
};

ticTacToe();
