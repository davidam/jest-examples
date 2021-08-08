const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
const localeString2 = array1.toLocaleString('es', { timeZone: 'UTC' });

test('toLocaleString test', () => {
    expect(localeString).toEqual("1,a,12/21/1997, 2:12:00 PM");
    expect(localeString2).toEqual("1,a,21/12/1997 14:12:00");    
});

// console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
