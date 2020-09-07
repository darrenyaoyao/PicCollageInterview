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

### `Component Design`

There are two components: App and Block.<br />

![component design](https://user-images.githubusercontent.com/16465582/92359624-2927ab80-f11e-11ea-8ac8-39cc2c2c4b05.jpeg)

### App: Manage all data and render all blocks.

### Block: Represent the ui of mine block.

### `Data Design`

I store all data in two array: minesMap and clickedMap.<br />
If the row number is N, the size of minesMap and clickedMap are N\*N.<br />

![data design](https://user-images.githubusercontent.com/16465582/92358865-c71a7680-f11c-11ea-8278-4991318d3d12.jpeg)

### minesMap: each index store the content of mine blocks

'' => no mines in adjacent blocks <br />
'1' => 1 mines in adjacent blocks <br />
'2' => 2 mines in adjacent blocks <br />
'X' => there is a mine in the block <br />

### clickedMaps: each index store the block is clicked or not

0 => have not been clicked
1 => have been clicked

### `Function Design`

There are two functions to make the app work. <br />

![function design](https://user-images.githubusercontent.com/16465582/92359635-2d53c900-f11e-11ea-9cce-0d9db5c8136f.jpeg)

### generateMinesMap: randomly generate minesMap

### renewClickedMap: given the clicked index and update the clickedMap by rules.

If there is no mine in the clicked index, the function will click 8 adjacent blocks.

There are some unit tests for these two functions.
