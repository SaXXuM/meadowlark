var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Тесты предсказаний', function () {
    test('getFortune() должна возвращать предсказание', function () {
        expect(typeof fortune.getFortune() === 'string');
    });
});