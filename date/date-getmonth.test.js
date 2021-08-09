const moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getMonth()); // (January gives 0)
// expected output: 6
test('getMonth test', () => {
  expect(moonLanding.getMonth()).toEqual(6);
});
