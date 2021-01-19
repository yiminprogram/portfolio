import { cityNameFilter } from '../cityNameFilter';

test('value 台北 convert to 臺北', () => {
  expect(cityNameFilter('台北')).toBe('臺北');
});
