const obj = {
  foo() {
    return 'bar';
  }
};

// console.log(obj.foo());
// // expected output: "bar"

test('obj test', () => {
  expect(obj.foo()).toEqual("bar");
});
