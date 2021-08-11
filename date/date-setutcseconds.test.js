const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');

test('getUTCSeconds test', () => {
    expect(date1.getUTCSeconds()).toEqual(30);
    date1.setUTCSeconds(45);
    expect(date1.getUTCSeconds()).toEqual(45);
});

// console.log(date1.getUTCSeconds());
// // expected output: 30

// console.log(date1.getUTCSeconds());
// // expected output: 39
