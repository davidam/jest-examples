const moonLanding = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(1);
test('getMilliseconds test', () => {
  expect(moonLanding.getMilliseconds()).toEqual(1);
});
//console.log(moonLanding.getMilliseconds());
// expected output: 123
