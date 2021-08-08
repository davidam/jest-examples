const x = new Boolean();
// expected output: false

const y = new Boolean('Mozilla');
// expected output: true

test('valueOf test', () => {
    expect(x.valueOf()).toEqual(false);        
    expect(y.valueOf()).toEqual(true);
});
