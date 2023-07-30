import { generateMatrix } from "./matrix.js";

describe("Given the function generateMatrix()", () => {
  describe("When it is call with (5,10)", () => {
    test("The array length should be 5", () => {
      const expected = 5;
      const result = generateMatrix(5, 10).length;
      expect(result).toBe(expected);
    });
  });
});

describe("Given the function generateMatrix()", () => {
  describe("When it is call with (5,10)", () => {
    test("The number of rows should be 5", () => {
      const numberOfRowsExpected = 5;
      const matrixTest = generateMatrix(5, 10);
      let elementsCounter = 0;
      let rowsCounter = 0;
      for (let i = 0; i < matrixTest.length; i++) {
        rowsCounter += 1;
        for (let j = 0; j < 10; j++) {
          elementsCounter += 1;
        }
      }

      expect(numberOfRowsExpected).toBe(rowsCounter);
    });
  });
});

describe("Given the function generateMatrix()", () => {
  describe("When it is call with (5,10)", () => {
    test("The number of columns should be 10", () => {
      const numberOfColumnsExpected = 10;
      const matrixTest = generateMatrix(5, 10);
      let elementsCounter = 0;

      let rowsCounter = 0;
      for (let i = 0; i < matrixTest.length; i++) {
        rowsCounter += 1;
        for (let j = 0; j < 10; j++) {
          elementsCounter += 1;
        }
      }

      const numberOfColumnsGenerated = elementsCounter / rowsCounter;

      expect(numberOfColumnsExpected).toBe(numberOfColumnsGenerated);
    });
  });
});

describe("Given the function generateMatrix()", () => {
  describe("When it is call with (5,10)", () => {
    test("The number of elements inside should be 50", () => {
      const numberOfElementsExpected = 50;
      const matrixTest = generateMatrix(5, 10);
      let elementsCounter = 0;

      let rowsCounter = 0;
      for (let i = 0; i < matrixTest.length; i++) {
        rowsCounter += 1;
        for (let j = 0; j < 10; j++) {
          elementsCounter += 1;
        }
      }

      const numberOfElementsInside = elementsCounter;

      expect(numberOfElementsExpected).toBe(numberOfElementsInside);
    });
  });
});
