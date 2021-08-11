const event = new Date('August 19, 1975 23:15:30');

test('sethours test', () => {
    event.setHours(20);
    expect(event.setHours(20)).toEqual(177704130000);
    event.setHours(20, 21, 22);
    string1 = 'Tue Aug 19 1975 20:21:22 GMT+0200 (hora de verano de Europa central)';
    expect(event.toString()).toEqual(string1);
});

// event.setHours(20);

// console.log(event);
// // expected output: Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)
// // (note: your timezone may vary)

// event.setHours(20, 21, 22);

// console.log(event);
// expected output: Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)
