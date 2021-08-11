const event = new Date(1993, 6, 28, 14, 39, 7);

test('toDateString test', () => {
  expect(event.toDateString()).toEqual("Wed Jul 28 1993");
});

// console.log(event.toString());
// // expected output: Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)
// // (note: your timezone may vary)

// console.log(event.toDateString());
// // expected output: Wed Jul 28 1993
