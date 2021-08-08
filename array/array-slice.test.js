const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

test('slice test', () => {
    expect(animals.slice(2)).toEqual(["camel", "duck", "elephant"]);
    expect(animals.slice(2, 4)).toEqual(["camel", "duck"]);
    expect(animals.slice(1, 5)).toEqual(["bison", "camel", "duck", "elephant"]);
    expect(animals.slice(-2)).toEqual(["duck", "elephant"]);
    expect(animals.slice(2, -1)).toEqual(["camel", "duck"]);
});

