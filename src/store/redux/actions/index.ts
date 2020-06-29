import * as data from './data';
import * as test from './test';

const index = {
  data,
  test
}

export type actions = typeof index;

export * from './data';
export * from './test';