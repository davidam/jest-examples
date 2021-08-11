function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

// console.log(sum(1, 2, 3));
// // expected output: 6

// console.log(sum(1, 2, 3, 4));
// // expected output: 10

test('restparameters test', () => {
    expect(sum(1, 2, 3)).toEqual(6);
    expect(sum(1, 2, 3, 4)).toEqual(10);    
});
