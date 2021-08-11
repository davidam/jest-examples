// create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// use byteLength to check the size
const bytes = buffer.byteLength;

test('ArrayBuffer test', () => {
    expect(bytes).toEqual(8);
});

// console.log(bytes);
// expected output: 8
