let er = /(\w+)\s(\w+)/
let str = 'John Smith'
let newstr = str.replace(er, '$2, $1')
//console.log(newstr)

test('replace test', () => {
    expect(newstr).toEqual("Smith, John");
});
