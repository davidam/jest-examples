const str1 = JSON.stringify({ x: 5, y: 6 });
const str2 = JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
const str3 = JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });

test('json stringify tests', () => {
    expect(str1).toEqual('{"x":5,"y":6}');
    expect(str2).toEqual('[3,"false",false]');
    expect(str3).toEqual('{"x":[10,null,null,null]}');
});
