const array1 = [1, 2, 'a', '1a'];
const str1 = array1.toString();

test('toString test', () => {
    expect(str1).toEqual("1,2,a,1a");
});
