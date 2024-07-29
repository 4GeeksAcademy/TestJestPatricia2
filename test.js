
const { fromDollarToYen, fromYenToPound } = require('./app');

test('converts 1 dollar to yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); // Ajusta el valor esperado según la tasa de conversión
});

test('converts 100 yen to pounds', () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.556); // Ajusta el valor esperado según la tasa de conversión
});