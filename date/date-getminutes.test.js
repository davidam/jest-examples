const birthday = new Date('March 13, 08 04:20');
test('getMinutes', () => {
  expect(birthday.getMinutes()).toEqual(20);
});
// console.log(birthday.getMinutes());
// expected output: 20
