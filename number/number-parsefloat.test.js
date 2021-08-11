function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI ;
}

test('parsefloat test', () => {
    expect(circumference('4.567abcdefgh')).toEqual(28.695307297889173);
    expect(circumference('abcdefgh')).toEqual(0);    
});

// console.log(circumference('4.567abcdefgh'));
// // expected output: 28.695307297889173

// console.log(circumference('abcdefgh'));
// // expected output: 0
