import React from "react";
import emptyCell from "../images/empty-cell.png";
import redCell from "../images/red-cell.png";
import yellowCell from "../images/yellow-cell.png";

class Board extends React.Component {
  state = {
    board: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    turn: "red",
    won: false
  };
  render() {
    const cells = [];
    this.state.board.forEach((element, index) => {
      const row = [];
      for (let x = 0; x < 7; x++) {
        if (this.state.board[index][x] === null) {
          row.push(
            <img
              src={emptyCell}
              onClick={event => {
                this.placeCounter(event);
                this.isWinner();
              }}
              alt="empty cell"
              className={x}
              id={index}
            />
          );
        }
        if (this.state.board[index][x] === "red") {
          row.push(
            <img
              src={redCell}
              onClick={this.placeCounter}
              alt="red cell"
              className={x}
              id={index}
            />
          );
        }
        if (this.state.board[index][x] === "yellow") {
          row.push(
            <img
              src={yellowCell}
              onClick={this.placeCounter}
              alt="yellow cell"
              className={x}
              id={index}
            />
          );
        }
      }
      cells.push(<div className="row">{row}</div>);
    });
    return <div className="board">{cells}</div>;
  }

  placeCounter = event => {
    const x = Number(event.target.className);
    this.setState(prevState => {
      const currentTurn = prevState.turn;
      for (let i = 5; i >= 0; i--) {
        if (prevState.board[i][x] === null) {
          prevState.board[i][x] = currentTurn;
          // check the horitonals (already know current is prevstate.turn)
          if (
            (prevState.board[i][x - 1] === currentTurn &&
              prevState.board[i][x - 2] === currentTurn &&
              prevState.board[i][x - 3] === currentTurn) ||
            (prevState.board[i][x + 1] === currentTurn &&
              prevState.board[i][x + 2] === currentTurn &&
              prevState.board[i][x + 3] === currentTurn)
          ) {
            alert(`${currentTurn} has won!`);
            console.log(1);
            prevState.won = true;
          }
          // check the down
          else if (
            i <= 2 &&
            (prevState.board[i + 1][x] === currentTurn &&
              prevState.board[i + 2][x] === currentTurn &&
              prevState.board[i + 3][x] === currentTurn)
          ) {
            alert(`${currentTurn} has won!`);
            console.log(2);
            prevState.won = true;
          }
          // check the diagonals
          else if (
            (prevState.board[Math.max(i - 1, 0)][x + 1] === currentTurn &&
              prevState.board[Math.max(i - 2, 0)][x + 2] === currentTurn &&
              prevState.board[Math.max(i - 3, 0)][x + 3] === currentTurn) ||
            (prevState.board[Math.max(i - 1, 0)][x - 1] === currentTurn &&
              prevState.board[Math.max(i - 2, 0)][x - 2] === currentTurn &&
              prevState.board[Math.max(i - 3, 0)][x - 3] === currentTurn) ||
            (prevState.board[Math.min(i + 1, 5)][x - 1] === currentTurn &&
              prevState.board[Math.min(i + 2, 5)][x - 2] === currentTurn &&
              prevState.board[Math.min(i + 3, 5)][x - 3] === currentTurn) ||
            (prevState.board[Math.min(i + 1, 5)][x + 1] === currentTurn &&
              prevState.board[Math.min(i + 2, 5)][x + 2] === currentTurn &&
              prevState.board[Math.min(i + 3, 5)][x + 3] === currentTurn)
          ) {
            alert(`${currentTurn} has won!`);
            console.log(3);
            prevState.won = true;
          }
          prevState.turn === "red"
            ? (prevState.turn = "yellow")
            : (prevState.turn = "red");
          return prevState.board;
        }
      }
    });
  };

  //doesn't work
  isWinner = () => {
    if (this.state.won === true) {
      console.log("hello");
    }
  };
}

export default Board;
