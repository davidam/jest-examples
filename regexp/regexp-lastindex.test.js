const regex1 = new RegExp( 'foo', 'g' );
const str1 = 'table football, foosball';

regex1.test(str1);

test('regex test', () => {
    expect(regex1.lastIndex).toEqual(9);
    regex1.test(str1);    
    expect(regex1.lastIndex).toEqual(19);
});

// console.log(regex1.lastIndex);
// // expected output: 9

// regex1.test(str1);

// console.log(regex1.lastIndex);
// // expected output: 19
