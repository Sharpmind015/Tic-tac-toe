import React from "react";
import { Link } from "react-router-dom";
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
    const locations = [
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3]
    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: [...history, { squares: squares, location: locations[i] }],
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
      const desc = index
        ? `Jump to move #${index} [${entry.location}]`
        : "Jump to game start";
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
        <div className={"status " + winner.player.toLowerCase()}>
          {"Winner: " + winner.player}{" "}
        </div>
      );
    } else if (!current.squares.includes(null)) {
      status = <div className="draw status">Draw</div>;
    } else {
      status = (
        <div className="status">
          {"Next player: " + (this.state.xIsNext ? "X" : "O")}
        </div>
      );
    }

    return (
      <div className="game">
        <Link to="/" className="button button--2">
          Back
        </Link>
        <div className="game-board">
          <Board
            winners={winner ? winner.line : []}
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
