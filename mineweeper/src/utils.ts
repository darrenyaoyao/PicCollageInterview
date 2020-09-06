const generateMinesMap = (
  exceptIndex: number,
  rowNumber: number,
  mineNumber: number
) => {
  // generate random mines location
  const blockList = Array.from(Array(rowNumber * rowNumber).keys()).fill(0);
  var minesIndexArr = [];
  while (minesIndexArr.length < mineNumber) {
    var r = Math.floor(Math.random() * rowNumber * rowNumber);
    if (minesIndexArr.indexOf(r) === -1 && r !== exceptIndex)
      minesIndexArr.push(r);
  }
  minesIndexArr.forEach((i) => {
    blockList[i] = 1;
  });

  // calculate mine count of all blocks
  const minesMap = Array.from(Array(rowNumber * rowNumber).keys()).map(
    () => ""
  );
  for (let i = 0; i < rowNumber * rowNumber; i++) {
    minesMap[i] = getMineCount(blockList, i, rowNumber);
  }
  return minesMap;
};

const getMineCount = (minesMap: number[], index: number, rowNumber: number) => {
  if (minesMap[index] === 1) return "X";

  const x = index % rowNumber;
  const y = Math.floor(index / rowNumber);
  let mineCount = 0;
  // check there is amy mine in 8 adjacent blocks.
  // down
  if (y + 1 < rowNumber && minesMap[(y + 1) * rowNumber + x] === 1) mineCount++;
  // down right
  if (
    y + 1 < rowNumber &&
    x + 1 < rowNumber &&
    minesMap[(y + 1) * rowNumber + x + 1] === 1
  )
    mineCount++;
  // down left
  if (
    y + 1 < rowNumber &&
    x - 1 >= 0 &&
    minesMap[(y + 1) * rowNumber + x - 1] === 1
  )
    mineCount++;
  // right
  if (x + 1 < rowNumber && minesMap[y * rowNumber + x + 1] === 1) mineCount++;
  // left
  if (x - 1 >= 0 && minesMap[y * rowNumber + x - 1] === 1) mineCount++;
  // up
  if (y - 1 >= 0 && minesMap[(y - 1) * rowNumber + x] === 1) mineCount++;
  // up right
  if (
    y - 1 >= 0 &&
    x + 1 < rowNumber &&
    minesMap[(y - 1) * rowNumber + x + 1] === 1
  )
    mineCount++;
  // up left
  if (y - 1 >= 0 && x - 1 >= 0 && minesMap[(y - 1) * rowNumber + x - 1] === 1)
    mineCount++;

  return mineCount !== 0 ? mineCount.toString() : "";
};

const renewClickedMap = (
  minesMap: string[],
  clickedMap: number[],
  i: number,
  rowNumber: number
) => {
  clickedMap[i] = 1;
  const x = i % rowNumber;
  const y = Math.floor(i / rowNumber);

  // if the mine count of the clicked index is 0, click all adjacent blocks
  if (minesMap[i] === "") {
    // down
    if (y + 1 < rowNumber && clickedMap[(y + 1) * rowNumber + x] !== 1)
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y + 1) * rowNumber + x,
        rowNumber
      );
    // down right
    if (
      y + 1 < rowNumber &&
      x + 1 < rowNumber &&
      clickedMap[(y + 1) * rowNumber + x + 1] !== 1
    )
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y + 1) * rowNumber + x + 1,
        rowNumber
      );
    // down left
    if (
      y + 1 < rowNumber &&
      x - 1 >= 0 &&
      clickedMap[(y + 1) * rowNumber + x - 1] !== 1
    )
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y + 1) * rowNumber + x - 1,
        rowNumber
      );
    // right
    if (x + 1 < rowNumber && clickedMap[y * rowNumber + x + 1] !== 1)
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        y * rowNumber + x + 1,
        rowNumber
      );
    // left
    if (x - 1 >= 0 && clickedMap[y * rowNumber + x - 1] !== 1)
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        y * rowNumber + x - 1,
        rowNumber
      );
    // up
    if (y - 1 >= 0 && clickedMap[(y - 1) * rowNumber + x] !== 1)
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y - 1) * rowNumber + x,
        rowNumber
      );
    // up right
    if (
      y - 1 >= 0 &&
      x + 1 < rowNumber &&
      clickedMap[(y - 1) * rowNumber + x + 1] !== 1
    )
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y - 1) * rowNumber + x + 1,
        rowNumber
      );
    // up left
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      clickedMap[(y - 1) * rowNumber + x - 1] !== 1
    )
      clickedMap = renewClickedMap(
        minesMap,
        clickedMap,
        (y - 1) * rowNumber + x - 1,
        rowNumber
      );
  }

  return clickedMap;
};

export { generateMinesMap, getMineCount, renewClickedMap };
