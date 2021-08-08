const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

test('pop test for arrays', () => {
    expect(plants.pop()).toEqual("tomato");
    expect(plants).toEqual(['broccoli', 'cauliflower', 'cabbage', 'kale']);
    expect(plants.pop()).toEqual("kale");
    expect(plants).toEqual(["broccoli", "cauliflower", "cabbage"]);    
});

// console.log(plants.pop());
// // expected output: "tomato"

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage"]
