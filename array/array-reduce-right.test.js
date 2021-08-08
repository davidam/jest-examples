const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

test('reduceRight test', () => {
    expect(array1).toEqual([4, 5, 2, 3, 0, 1]);
});

