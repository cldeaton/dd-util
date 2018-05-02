const ddShiftBy = require('./dd-shiftby');

test('original array is not modified', () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(2);
  expect(testArray).toEqual([0,1,2,3,4,5]);
});

test('shifts by 2', () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(2);
  expect(output).toEqual([4,5,0,1,2,3]);
});

test("shifts by -2", () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(-2);
  expect(output).toEqual([2,3,4,5,0,1]);
});

test("shifts by > than length when positive", () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(11);
  expect(output).toEqual([1,2,3,4,5,0]);
});

test("shifts by > than length when positive(2)", () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(15);
  expect(output).toEqual([3,4,5,0,1,2]);
});

test("shifts by > than length when negative", () => {
  testArray = [0,1,2,3,4,5];
  output = testArray.shiftBy(-7);
  expect(output).toEqual([1,2,3,4,5,0]);
});
