import { isArray, AnyArray } from './isArray';
import { isObject } from './isObject';

export const isNullOrEmpty = <T>(t: T): boolean => {
  return t === null ||
    t === undefined ||
    (isArray(t) ? (t as AnyArray<T>).length <= 0 : false) ||
    (isObject(t) ? Object.keys(t).length <= 0 : false) ||
    (typeof t === 'string' || t instanceof String ? t.length <= 0 : false);
}