const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

test('json parse tests', () => {
    expect(obj.count).toEqual(42);
    expect(obj.result).toEqual(true);    
});
