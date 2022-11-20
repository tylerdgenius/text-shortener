/**
 * This page defines the entire package
 * @author tylerdgenius
 */

/**
 * Define the base type for the function
 */
type textTruncatorType = (value: string, length?: number) => string;

export const truncateText: textTruncatorType = (value, length) => {
  if (length) {
    /**
     * If length is equal to the length of the string passed in then return the exact string
     */
    if (length <= value.length) return value;

    /**
     * If it is not equal, then truncate the returned text and return it
     */
    return `${value.slice(0, length)}...`;
  }

  /**
   * If length is equal to the length of the string passed in then return the exact string
   */
  if (value.length <= 30) return value;

  /**
   * If it is not equal, then truncate the returned text and return it
   */
  return `${value.slice(0, 30)}...`;
};
