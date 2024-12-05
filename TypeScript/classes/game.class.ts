import { Game } from "../types/game.interface";
export class GameClass implements Game {
  players: string[] = [];
  currentPlayer: number = 0;
  moves: number = 0;
  board: string[] = new Array(9).fill("");

  constructor(player1: string, player2: string) {
    this.players = [player1, player2];
  }

  startGame(): void {
    console.log("Game Started!");
    this.board = new Array(9).fill("");
    this.moves = 0;
    this.currentPlayer = 0;
  }

  makeMove(position: number): boolean {
    if (this.board[position] === "") {
      this.board[position] = this.players[this.currentPlayer];
      this.moves++;
      this.currentPlayer = this.currentPlayer === 0 ? 1 : 0; 
      return true;
    }
    return false;
  }

  checkWinner(): string | null {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a]; 
      }
    }

    return this.moves === 9 ? "Draw" : null; 
  }
}
