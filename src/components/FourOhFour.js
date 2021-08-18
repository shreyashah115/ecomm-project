import React from "react";
import Layout from "components/Layout";
import "css/tetris.css";
const Tetris = require("react-tetris");

const FourOhFour = () => {
  return (
    <Layout>
      <div className="tetris">
        <h1>Woops, page not found.</h1>
        <p>Why not play some Tetris while you're at this page?</p>
        <div>
          <Tetris>
            {({ Gameboard, points, linesCleared, HeldPiece }) => {
              return (
                <div className="parent">
                  <div>
                    <Gameboard />
                  </div>
                  <div>
                    <p className="tetris-header" id="held-piece">
                      Held Piece
                    </p>
                    <HeldPiece />

                    <p className="tetris-header">Score</p>
                    <p>Points: {points}</p>
                    <p>Lines Cleared: {linesCleared}</p>
                  </div>
                </div>
              );
            }}
          </Tetris>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFour;
