let gridSize = 4;
let player = "X";
let data = [];
const board = document.querySelector(".app");

function createBoard() {
  for (let i = 0; i < gridSize; i++) {
    const rowRef = document.createElement("div");
    data[i] = [];
    rowRef.className = "row";
    for (let j = 0; j < gridSize; j++) {
      data[i][j] = undefined;
      const cellRef = document.createElement("div");
      cellRef.className = "cell";
      cellRef.setAttribute("data-row", i);
      cellRef.setAttribute("data-col", j);
      rowRef.appendChild(cellRef);
    }
    board.appendChild(rowRef);
  }
}

function addListener() {
  board.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") === "cell" && e.target.innerText == "") {
      e.target.innerText = player;
      const rowID = e.target.dataset.row;
      const coldId = e.target.dataset.col;
      updateGameData(rowID, coldId, player);
      if (checkWinner()) {
        setTimeout(() => alert(`${player} wins!`), 10); // Small delay to allow the last move to render
        board.removeEventListener("click", arguments.callee);
      } else {
        changePlayer();
      }
    }
  });
}

function changePlayer() {
  player = player === "X" ? "O" : "X";
}

function updateGameData(row, col, player) {
  if (!data[row]) data[row] = [];
  data[row][col] = player;
  console.log(data);
}

function checkWinner() {
  // Check rows
  for (let i = 0; i < gridSize; i++) {
    // Ensure the row is defined and all cells in the row are equal
    if (data[i] && data[i].every((cell) => cell === player)) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < gridSize; col++) {
    let columnCheck = true;
    for (let row = 0; row < gridSize; row++) {
      if (data[row][col] !== player) {
        columnCheck = false;
        break;
      }
    }
    if (columnCheck) return true;
  }

  // // Check diagonal (top-left to bottom-right)
  let diagCheck1 = true;
  for (let i = 0; i < gridSize; i++) {
    if (data[i][i] !== player) {
      diagCheck1 = false;
      break;
    }
  }
  if (diagCheck1) return true;

  // // Check diagonal (top-right to bottom-left)
  let diagCheck2 = true;
  for (let i = 0; i < gridSize; i++) {
    if (data[i][gridSize - i - 1] !== player) {
      diagCheck2 = false;
      break;
    }
  }
  if (diagCheck2) return true;

  return false;
}

createBoard();
addListener();
