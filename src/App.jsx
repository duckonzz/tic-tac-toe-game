import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialname="Player 1" symbol="X" />
          <Player initialname="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
