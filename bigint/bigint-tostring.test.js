
test('bigint tostring test', () => {
    expect(1024n.toString()).toEqual("1024");
    expect(1024n.toString(2)).toEqual("10000000000");
    expect(1024n.toString(16)).toEqual("400");
});

// console.log(1024n.toString());
// // expected output: "1024"

// console.log(1024n.toString(2));
// // expected output: "10000000000"

// console.log(1024n.toString(16));
// // expected output: "400"
