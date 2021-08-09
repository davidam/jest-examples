const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const date2 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

test('getUTCHours test', () => {
    expect(date1.getUTCHours()).toEqual(12);
    expect(date2.getUTCHours()).toEqual(10);    
});

// console.log(date1.getUTCHours());
// // expected output: 12

// console.log(date2.getUTCHours());
// // expected output: 10
