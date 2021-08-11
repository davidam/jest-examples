function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

test('typeOfNaN', () => {
    expect(typeOfNaN('100F')).toEqual("NaN");
    expect(typeOfNaN(NaN)).toEqual("Number NaN");    
});

// console.log(typeOfNaN('100F'));
// // expected output: "NaN"

// console.log(typeOfNaN(NaN));
// // expected output: "Number NaN"
