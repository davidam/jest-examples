const moonLanding = new Date('July 20, 1969, 20:18:04 UTC');

test('getUTCSeconds test', () => {
  expect(moonLanding.getUTCSeconds()).toEqual(4);
});

//console.log(moonLanding.getUTCSeconds());
// expected output: 4
