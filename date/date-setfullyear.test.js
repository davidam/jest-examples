const event = new Date('August 19, 1975 23:15:30');

test('getFullYear test', () => {
    event.setFullYear(1969);    
    expect(event.getFullYear()).toEqual(1969);
    event.setFullYear(0);
    expect(event.getFullYear()).toEqual(0);
});

// console.log(event.getFullYear());
// // expected output: 1969

// event.setFullYear(0);

// console.log(event.getFullYear());
// // expected output: 0
