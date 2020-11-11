import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare = i => {
    return (
      <Square
        winner={this.props.winners.includes(i)}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={"square" + i}
      />
    );
  };
  renderSquares = n => {
    let result = [];
    for (let i = n; i < n + 3; i++) {
      result.push(this.renderSquare(i));
    }
    return result;
  };
  render() {
    return (
      <div>
        <div className="board-row">{this.renderSquares(0)}</div>
        <div className="board-row">{this.renderSquares(3)}</div>
        <div className="board-row">{this.renderSquares(6)}</div>
      </div>
    );
  }
}

export default Board;
