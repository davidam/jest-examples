function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

test('isInteger test', () => {
    expect(fits(5, 10)).toEqual("Fits!");
    expect(fits(5, 11)).toEqual("Does NOT fit!");    
});

// console.log(fits(5, 10));
// // expected output: "Fits!"

// console.log(fits(5, 11));
// // expected output: "Does NOT fit!"
