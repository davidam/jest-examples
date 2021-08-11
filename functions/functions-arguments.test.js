function func1(a, b, c) {
    l = [];
    const animals = ['pigs', 'goats', 'sheep'];
    const count = animals.push('cows');

    l.push(arguments[0]);
    l.push(arguments[1]);
    l.push(arguments[2]);

    return l;
}

test('function arguments', () => {
  expect(func1(1, 2, 3)).toEqual([1, 2, 3]);
});

//func1(1, 2, 3);

