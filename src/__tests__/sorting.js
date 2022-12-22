import orderByProps from '../sorting';

const objTest = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const result = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('тестирование функции orderByProps', () => {
  expect(orderByProps(objTest, ['name', 'level'])).toMatchObject(result);
});
