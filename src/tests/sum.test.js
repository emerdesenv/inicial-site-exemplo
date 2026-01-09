const sum = require('../assets/js/sum');

test('deve somar dois números corretamente', () => {
    expect(sum(2, 3)).toBe(5);
});