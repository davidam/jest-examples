const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

test('event.toUTCString()', () => {
    expect(event.toUTCString()).toEqual("Thu, 01 Jan 1976 02:15:30 GMT");
    expect(event.getUTCMonth()).toEqual(0);
    event.setUTCMonth(11);
    expect(event.toUTCString()).toEqual("Wed, 01 Dec 1976 02:15:30 GMT");
});

// console.log(event.toUTCString());
// // Thu, 01 Jan 1976 02:15:30 GMT

// console.log(event.getUTCMonth());
// // expected output: 0

// event.setUTCMonth(11);

// console.log(event.toUTCString());
// // expected output: Wed, 01 Dec 1976 02:15:30 GMT
