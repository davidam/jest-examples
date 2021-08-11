const event = new Date('August 19, 1975 23:15:30');

// console.log(event.toTimeString());

test('toTimeString test', () => {
    expect(event.toTimeString()).toEqual("23:15:30 GMT+0200 (hora de verano de Europa central)");
});

// expected output: 23:15:30 GMT+0200 (CEST)
// (note: your timezone may vary)
