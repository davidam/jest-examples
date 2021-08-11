// Depending on timezone, your results will vary
const date = new Date('20 December 2019 14:48');

// console.log(date[Symbol.toPrimitive]('string'));

test('toPrimitive test', () => {
    expect(date[Symbol.toPrimitive]('string')).toEqual("Fri Dec 20 2019 14:48:00 GMT+0100 (hora estándar de Europa central)");
    expect(date[Symbol.toPrimitive]('number')).toEqual(1576849680000);
});
// expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

// console.log(date[Symbol.toPrimitive]('number'));
// expected output: 1576833480000
