const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-11:00');


test('getUTCDate test', () => {
    expect(date1.getUTCDate()).toEqual(19);
    expect(date2.getUTCDate()).toEqual(20);
});


// console.log(date1.getUTCDate());
// // expected output: 19

// console.log(date2.getUTCDate());
// // expected output: 20
