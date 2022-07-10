import { truncateText } from '../index';

/**
 * Check if text is returned if characters are less than 30
 */
test('Truncate Text', () => {
  expect(truncateText('This')).toBe('This');
});

/**
 * Check if text is truncated at 30 characters
 */
test('Truncate Text', () => {
  expect(truncateText('This is supposed to be a text string that is used to give out an output')).toBe(
    'This is supposed to be a text ...',
  );
});

/**
 * Check if text length is equal to character length passed in
 */
test('Truncate Text', () => {
  expect(truncateText('This', 4)).toBe('This');
});

/**
 * Check if text length is more than character length passed in
 */
test('Truncate Text', () => {
  expect(truncateText('This', 2)).toBe('Th...');
});
