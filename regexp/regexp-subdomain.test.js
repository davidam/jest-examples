let url = 'http://xxx.dominio.com'
//console.log(/[^.]+/.exec(url)[0].substr(7)) // registra 'xxx'

test('regexp subdomain test', () => {
    expect('xxx').toEqual(/[^.]+/.exec(url)[0].substr(7));
});
