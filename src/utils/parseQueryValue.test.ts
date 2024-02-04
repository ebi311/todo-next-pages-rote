import { parseQueryValueBoolean } from './parseQueryValue';

describe('parseQueryValueBoolean', () => {
  test('should return undefined if value is not a string', () => {
    expect(parseQueryValueBoolean(undefined)).toBeUndefined();
    expect(parseQueryValueBoolean([])).toBeUndefined();
  });

  test("should return undefined if value is not 'true' or 'false'", () => {
    expect(parseQueryValueBoolean('true ')).toBeUndefined();
    expect(parseQueryValueBoolean(' false')).toBeUndefined();
    expect(parseQueryValueBoolean('yes')).toBeUndefined();
    expect(parseQueryValueBoolean('no')).toBeUndefined();
  });

  test("should return true if value is 'true'", () => {
    expect(parseQueryValueBoolean('true')).toBe(true);
    expect(parseQueryValueBoolean('TRUE')).toBe(true);
    expect(parseQueryValueBoolean('')).toBe(true);
  });

  test("should return false if value is 'false'", () => {
    expect(parseQueryValueBoolean('false')).toBe(false);
  });

  test('should return default value if value is not a string', () => {
    expect(parseQueryValueBoolean('no', true)).toBe(true);
    expect(parseQueryValueBoolean('no', false)).toBe(false);
    expect(parseQueryValueBoolean('true', false)).toBe(true);
  });
});
