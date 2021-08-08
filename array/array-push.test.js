const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

test('push tests', () => {
    expect(count).toEqual(4);
    expect(animals).toEqual(["pigs", "goats", "sheep", "cows"]);
    li = animals.push("chickens", "cats", "dogs");
    expect(li).toEqual(7);
    expect(animals).toEqual(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]);
});

// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
