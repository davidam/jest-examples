function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

test('parseInt test', () => {
    expect(roughScale('  0xF', 16)).toEqual(1500);
    expect(roughScale('321', 2)).toEqual(0);    
});

// console.log(roughScale(' 0xF', 16));
// // expected output: 1500

// console.log(roughScale('321', 2));
// // expected output: 0
