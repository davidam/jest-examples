const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

test('date parse test', () => {
    expect(unixTimeZero).toEqual(0);
    expect(javaScriptRelease).toEqual(818035920000);
});

// console.log(unixTimeZero);
// // expected output: 0

// console.log(javaScriptRelease);
// // expected output: 818035920000
