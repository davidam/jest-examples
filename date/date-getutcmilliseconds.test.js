const exampleDate = new Date('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)

test('getUTCMilliseconds test', () => {
    expect(exampleDate.getUTCMilliseconds()).toEqual(678);
});

// console.log(exampleDate.getUTCMilliseconds());
// expected output: 678
