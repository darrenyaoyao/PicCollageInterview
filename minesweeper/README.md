# PicCollage Minesweeper

minesweeper: [https://minesweeper-1773e.web.app](https://minesweeper-1773e.web.app)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Design

### Component Design

There are two components: App and Block.<br />

App: Manage all data and render all blocks.<br />
Block: Represent the ui of mine block.<br />

### Data Design

I store all data in two array: minesMap and clickedMap.<br />
If the row number is N, the size of minesMap and clickedMap are N\*N.<br />

minesMap: each index store the content of mine blocks <br />
'' => no mines in adjacent blocks <br />
'1' => 1 mines in adjacent blocks <br />
'2' => 2 mines in adjacent blocks <br />
'X' => there is a mine in the block <br />

clickedMaps: each index store the block is clicked or not <br />
0 => have not been clicked
1 => have been clicked

### Function Design

There are two functions to make the app work. <br />

1. generateMinesMap: randomly generate minesMap
2. renewClickedMap: given the clicked index and update the clickedMap by rules.
