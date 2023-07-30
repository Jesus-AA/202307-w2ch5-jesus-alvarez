const generateMatrix = (rows, columns) => {
  const arrayMatrix = [];
  for (let i = 0; i < rows; i++) {
    arrayMatrix[i] = [];
    for (let j = 0; j < columns; j++) {
      const randomNum = Math.floor(Math.random() * j);

      if (randomNum % 2 === 0) {
        arrayMatrix[i][j] = 0;
        continue;
      }

      arrayMatrix[i][j] = 1;
    }
  }

  return arrayMatrix;
};

console.table(generateMatrix(10, 10));
