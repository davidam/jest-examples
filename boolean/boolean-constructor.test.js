const flag = new Boolean();

// console.log(flag);
// expected output: false
test('test new Boolean', () => {
    expect(flag).not.toBeNull();
    expect(flag).toBeDefined();
    expect(flag).toBeTruthy();
});
