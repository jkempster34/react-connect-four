import React from "react";
import Header from "./components/Header.js";
import Board from "./components/Board.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board className="board" />
      </div>
    );
  }
}

export default App;
