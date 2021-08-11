const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

test('getUTCMinutes test', () => {
    expect(date1.getUTCMinutes()).toEqual(15);
    expect(date1.setUTCMinutes(25));
    expect(date1.getUTCMinutes()).toEqual(25);
});

// console.log(date1.getUTCMinutes());
// // expected output: 15

// date1.setUTCMinutes(25);

// console.log(date1.getUTCMinutes());
// // expected output: 25
