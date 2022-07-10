import { truncateText } from '../index';

test('Truncate Text', () => {
  expect(truncateText('This')).toBe('This');
});

