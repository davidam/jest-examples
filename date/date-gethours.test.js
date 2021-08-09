const birthday = new Date('March 13, 08 04:20');
test('getHours test', () => {
  expect(birthday.getHours()).toEqual(4);
});

// console.log(birthday.getHours());
// expected output: 4
