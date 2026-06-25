# Memory Game

A two-player memory matching game built with React. Players flip cards to find matching image pairs, earn points, and compete for the highest score.

## Overview

This project is a browser-based card matching game built using Create React App. The board shuffles at the start of each game, and two players take turns trying to match pairs of cards.

## Features

- Two-player turn-based gameplay
- Score tracking for Player 1 and Player 2
- Randomized card order on each game
- Simple, responsive card board layout
- Built with React and standard web technologies

## Project Structure

- `src/App.js` — main game logic and UI
- `src/Card.js` — card component
- `src/styles.css` — game styling
- `public/index.html` — HTML entry point
- `public/images/` — game card images

## Getting Started

### Prerequisites

- Node.js 18.x or newer
- npm 9.x or newer

### Install dependencies

From the project root directory:

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open `http://localhost:3000` in your browser to play the game.

The app will reload automatically when you make changes.

## Available Scripts

### `npm start`

Starts the development server in development mode.

### `npm run build`

Builds the app for production and outputs optimized files to the `build/` folder.

### `npm test`

Runs the test runner in interactive watch mode.

### `npm run eject`

Ejects the project from Create React App configuration. This is irreversible and only recommended if you need full control over the build setup.

## Gameplay

1. Click a card to flip it over.
2. Click a second card to try to match the pair.
3. If the cards match, the current player scores a point.
4. If the cards do not match, the turn switches to the other player.
5. Click `New Game` to restart the board and reset scores.

## Technologies

- React 19
- Create React App
- JavaScript
- CSS

## Notes

This project is intended as a simple React game demo. You can extend it by adding sound effects, animations, difficulty levels, or a single-player mode.
