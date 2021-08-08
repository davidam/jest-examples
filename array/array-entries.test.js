const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

test('entries for arrays', () => {
    expect(iterator1.next().value).toEqual([0, "a"]);
    expect(iterator1.next().value).toEqual([1, "b"]);
});

