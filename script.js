const scoreDisplay = document.getElementById("score");
const width = 28;
let score = 0;
const gridContainer = document.querySelector(".gridContainer");
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

//0 - pac-dots
//1 - wall
//2 - ghost
//3 - power-pellet
//4 - empty

const squares = [];
//create your board
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    gridContainer.appendChild(square);
    squares.push(square);
    square.id = i;
    //add layout to each square
    if (layout[i] === 0) {
      squares[i].classList.add("pac-dots");
    }
    if (layout[i] === 1) {
      squares[i].classList.add("wall");
    }
    if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    }
    if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    }
  }
}
createBoard();

//create characters
//draw pacman onto the board
let pacmancurrentIndex = 490;
squares[pacmancurrentIndex].classList.add("pac-man");

//move pacman
function movePacman(e) {
  squares[pacmancurrentIndex].classList.remove("pac-man");

  switch (e.key) {
    case "ArrowLeft":
      if (
        pacmancurrentIndex % width !== 0 &&
        !squares[pacmancurrentIndex - 1].classList.contains("wall") &&
        !squares[pacmancurrentIndex - 1].classList.contains("ghost-lair")
      ) {
        pacmancurrentIndex -= 1;
      }
      if (pacmancurrentIndex - 1 === 363) {
        pacmancurrentIndex = 391;
      }
      break;
    case "ArrowUp":
      if (
        pacmancurrentIndex - width >= 0 &&
        !squares[pacmancurrentIndex - width].classList.contains("wall") &&
        !squares[pacmancurrentIndex - width].classList.contains("ghost-lair")
      ) {
        pacmancurrentIndex -= width;
      }

      break;
    case "ArrowRight":
      if (
        pacmancurrentIndex % width < width - 1 &&
        !squares[pacmancurrentIndex + 1].classList.contains("wall") &&
        !squares[pacmancurrentIndex + 1].classList.contains("ghost-lair")
      ) {
        pacmancurrentIndex += 1;
      }
      if (pacmancurrentIndex + 1 === 392) {
        pacmancurrentIndex = 364;
      }
      break;

    case "ArrowDown":
      if (
        pacmancurrentIndex + width < width * width &&
        !squares[pacmancurrentIndex + width].classList.contains("wall") &&
        !squares[pacmancurrentIndex + width].classList.contains("ghost-lair")
      ) {
        pacmancurrentIndex += width;
      }
      break;
  }
  squares[pacmancurrentIndex].classList.add("pac-man");
  pacDotEaten();
  powerPelletEaten();
  checkforWin();
  checkforGameOver();
}
document.addEventListener("keyup", movePacman);

//what happens when you eat a pac dot

function pacDotEaten() {
  if (squares[pacmancurrentIndex].classList.contains("pac-dots")) {
    score++;
    scoreDisplay.innerHTML = score;
    squares[pacmancurrentIndex].classList.remove("pac-dots");
  }
}
function powerPelletEaten() {
  if (squares[pacmancurrentIndex].classList.contains("power-pellet")) {
    score += 10;
    scoreDisplay.innerHTML = score;
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScareGhosts, 10000);
    squares[pacmancurrentIndex].classList.remove("power-pellet");
  }
}

//make the ghosts stop flashing
function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

//create ghosts using constructor
class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

//all my ghosts
let ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 379, 500),
];

//draw my ghosts onto the grid
ghosts.forEach((ghost) =>
  squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
);

//move ghosts randomly
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, 1, width, -width];
  let directionRandom =
    directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    //to avoid ghosts collisions or wall colission
    if (
      !squares[ghost.currentIndex + directionRandom].classList.contains(
        "wall"
      ) &&
      !squares[ghost.currentIndex + directionRandom].classList.contains("ghost")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      ghost.currentIndex += directionRandom;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }
    //Find a new random direction to go
    else {
      directionRandom =
        directions[Math.floor(Math.random() * directions.length)];
    }
    //if the ghosts is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }
    //if the ghosts is currently scared and pacman is on it
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pac-man")
    ) {
      ghost.isScared = false;
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      scoreDisplay.innerHTML = score;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }
    checkforGameOver();
  }, ghost.speed);
}

function checkforGameOver() {
  if (
    squares[pacmancurrentIndex].classList.contains("ghost") &&
    !squares[pacmancurrentIndex].classList.contains("scared-ghost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    setTimeout(function () {
      alert("Game Over");
    }, 500);
  }
}

function checkforWin() {
  if (score >= 274) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    setTimeout(function () {
      alert("You hav Won");
    }, 500);
  }
}
