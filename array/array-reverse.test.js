const array1 = ['one', 'two', 'three'];

test('reverse test', () => {
    expect(array1).toEqual(["one", "two", "three"]);
    const reversed = array1.reverse();    
    expect(reversed).toEqual(["three", "two", "one"]);
    expect(["three", "two", "one"]).toEqual(array1);
});

