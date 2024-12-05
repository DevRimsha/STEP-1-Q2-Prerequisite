export interface Game {
    players: string[];
    currentPlayer: number;
    moves: number;
    board: string[];
    
    startGame(): void;
    makeMove(position: number): boolean;
    checkWinner(): string | null;
  }
  