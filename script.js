let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgWinner = document.querySelector(".msg-winner");
let winner = document.querySelector(".winner");

let turnO = true; //Player X
let count = 0; //To Track Draw

const winPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];

const resetGame = () => {
	turnO = true;
	count = 0;
	enableBoxes();
	msgWinner.classList.add("hide");
	newGamebtn.classList.add("hide");
};

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (turnO) {
			box.innerText = "O";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;
		count++;

		let isWinner = checkWin();

		if (count === 9 && !isWinner) {
			draw();
		}
	});
});

const disabledBoxes = () => {
	for (let box of boxes) {
		box.disabled = true;
	}
};

const enableBoxes = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
};

const draw = () => {
	winner.innerText = "The game is draw!";
	msgWinner.classList.remove("hide");
	newGamebtn.classList.remove("hide");
	disabledBoxes();
};

const showWinner = (Winnersyb) => {
	winner.innerText = `Congratulations winner is ${Winnersyb}`;
	msgWinner.classList.remove("hide");
	newGamebtn.classList.remove("hide");
	disabledBoxes();
};

const checkWin = () => {
	for (let pattern of winPattern) {
		let pos1 = boxes[pattern[0]].innerText;
		let pos2 = boxes[pattern[1]].innerText;
		let pos3 = boxes[pattern[2]].innerText;

		if (pos1 != 0 && pos2 != 0 && pos3 != 0) {
			if (pos1 === pos2 && pos2 === pos3) {
				showWinner(pos1);
			}
		}
	}
};

newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
