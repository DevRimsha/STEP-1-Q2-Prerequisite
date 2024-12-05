import { TicTacToe } from "./classes/tic-tac-toe.class";

const game = new TicTacToe("Player 1", "Player 2");

game.startGame();

game.makeMove(0); 
game.makeMove(1); 
game.makeMove(3); 

const winner = game.checkWinner();
if (winner) {
  console.log(winner === "Draw" ? "It's a draw!" : `${winner} wins!`);
} else {
  console.log("Game is still ongoing.");
}
