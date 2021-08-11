const event1 = new Date('July 1, 1999');
const event2 = new Date();

event2.setTime(event1.getTime());

test('setTime test', () => {
    expect(event1).toEqual(1999-06-30T22:00:00.000Z);
    expect(event2).toEqual(1999-06-30T22:00:00.000Z);
});

// console.log(event1);
// // expected output: Thu Jul 01 1999 00:00:00 GMT+0200 (CEST)

// console.log(event2);
// // expected output: Thu Jul 01 1999 00:00:00 GMT+0200 (CEST)
// // (note: your timezone may vary)
