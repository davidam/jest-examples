const moonLanding = new Date('July 20, 69 00:20:18');
test('getSeconds test', () => {
  expect(moonLanding.getSeconds()).toEqual(18);
});
// console.log(moonLanding.getSeconds());
// expected output: 18
