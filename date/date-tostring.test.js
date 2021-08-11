const event = new Date('August 19, 1975 23:15:30');

test('toString test', () => {
    expect(event.toString()).toEqual("Tue Aug 19 1975 23:15:30 GMT+0200 (hora de verano de Europa central)");
});

//console.log(event.toString());
// expected output: Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)
// (note: your timezone may vary)
