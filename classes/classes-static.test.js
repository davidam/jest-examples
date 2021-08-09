class ClassWithStaticMethod {

  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }

}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// output: "static method has been called."

test('class with static method tests', () => {
    expect(ClassWithStaticMethod.staticProperty).toEqual("someValue");
    expect(ClassWithStaticMethod.staticMethod()).toEqual("static method has been called.");    
});
