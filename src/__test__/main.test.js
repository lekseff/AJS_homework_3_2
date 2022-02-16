import heroesSort from '../app';

test('sorting by health level', () => {
  const data = [
    { name: 'лучник', health: 5 },
    { name: 'мечник', health: 98 },
    { name: 'маг', health: 60 },
  ];
  const expected = [
    { name: 'мечник', health: 98 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 5 },
  ];
  const result = heroesSort(data);
  expect(result).toEqual(expected);
});
