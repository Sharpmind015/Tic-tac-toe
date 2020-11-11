import React from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0,
      toggle: false
    };
  }
  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: [...history, { squares: squares }],
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };
  jumpTo = i => {
    this.setState({ stepNumber: i, xIsNext: i % 2 === 0 });
  };
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((entry, index) => {
      const desc = index ? `Jump to move #${index}` : "Jump to game start";
      return (
        <li key={index}>
          <button
            className={
              (this.state.stepNumber === index ? "active" : "") + " button"
            }
            onClick={() => this.jumpTo(index)}
          >
            {desc}
          </button>
        </li>
      );
    });
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = (
        <div className={"status " + winner.toLowerCase()}>
          {"Winner: " + winner}{" "}
        </div>
      );
    } else {
      status = (
        <div className="status">
          {"Next player: " + (this.state.xIsNext ? "X" : "O")}
        </div>
      );
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => {
              this.handleClick(i);
            }}
          />
        </div>
        <div className="game-info">
          {status}
          <div onClick={this.handleToggle} className="history">
            History
          </div>
          {this.state.toggle && <div>{moves}</div>}
        </div>
      </div>
    );
  }
}

export default Game;
