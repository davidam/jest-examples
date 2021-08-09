const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

test('newdate', () => {
    expect(date1 === date2).toEqual(false);
    expect(date1 - date2).toEqual(0);    
});

// console.log(date1 === date2);
// // expected output: false;

// console.log(date1 - date2);
// // expected output: 0
