
test('typeof test', () => {
    expect(typeof Object(1n)).toEqual("object");
    expect(typeof Object(1n).valueOf()).toEqual("bigint");    
});

// console.log(typeof Object(1n));
// // expected output: "object"

// console.log(typeof Object(1n).valueOf());
// // expected output: "bigint"
