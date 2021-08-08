const flag1 = new Boolean(true);
const flag2 = new Boolean(1);

test('toString test', () => {
    expect(flag1.toString()).toEqual("true");
    expect(flag2.toString()).toEqual("true");    
});

