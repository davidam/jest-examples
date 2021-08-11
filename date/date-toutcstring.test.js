const event = new Date('14 Jun 2017 00:00:00 PDT');

test('toUTCString', () => {
  expect(event.toUTCString()).toEqual("Wed, 14 Jun 2017 07:00:00 GMT");
});

// console.log(event.toUTCString());
// expected output: Wed, 14 Jun 2017 07:00:00 GMT
