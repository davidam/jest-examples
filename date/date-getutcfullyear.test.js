const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

test('getUTCFullYear', () => {
    expect(date1.getUTCFullYear()).toEqual(1975);
    expect(date2.getUTCFullYear()).toEqual(1976);
});

// console.log(date1.getUTCFullYear());
// // expected output: 1975

// console.log(date2.getUTCFullYear());
// // expected output: 1976
