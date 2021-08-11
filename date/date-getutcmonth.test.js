const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

test('getUTCMonth test', () => {
    expect(date1.getUTCMonth()).toEqual(11);
    expect(date2.getUTCMonth()).toEqual(0);    
});

// // December
// console.log(date1.getUTCMonth());
// // expected output: 11

// // January
// console.log(date2.getUTCMonth());
// // expected output: 0
