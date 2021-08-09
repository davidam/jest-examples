const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

test('getDate test', () => {
  expect(date1).toEqual(19);
});
// console.log(date1);
// expected output: 19
