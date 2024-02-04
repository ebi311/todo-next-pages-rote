const queryBoolean: Record<string, boolean> = {
  // クエリで、変数名だけ指定された場合は、true として扱う
  '': true,
  true: true,
  false: false,
};

export function parseQueryValueBoolean(
  _value: string | string[] | undefined,
): boolean | undefined;
export function parseQueryValueBoolean(
  _value: string | string[] | undefined,
  defaultValue: boolean,
): boolean;
export function parseQueryValueBoolean(
  _value: string | string[] | undefined,
  defaultValue: boolean | undefined = undefined,
) {
  if (typeof _value !== 'string') return defaultValue;
  const value = _value.toLowerCase();
  const result = queryBoolean[value];
  return result === undefined ? defaultValue : result;
}

export function parseQueryValueToString(
  value: string | string[] | undefined,
): string | undefined;
export function parseQueryValueToString(
  value: string | string[] | undefined,
  defaultValue: string,
): string;
export function parseQueryValueToString(
  value: string | string[] | undefined,
  defaultValue: string | undefined = undefined,
) {
  if (typeof value !== 'string') return defaultValue;
  return value;
}
