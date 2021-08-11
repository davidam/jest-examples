function warn(x) {
  if (Number.isSafeInteger(x)) {
    return 'Precision safe.';
  }
  return 'Precision may be lost!';
}

test('warn test', () => {
    expect(warn(Math.pow(2, 53))).toEqual("Precision may be lost!");
    expect(warn(Math.pow(2, 53) - 1)).toEqual("Precision safe.");    
});

// console.log(warn(Math.pow(2, 53)));
// // expected output: "Precision may be lost!"

// console.log(warn(Math.pow(2, 53) - 1));
// // expected output: "Precision safe."
