import * as data from './data';
import * as common from './common';
import * as test from './test';

const index = {
  data,
  common,
  test
}

export type actions = typeof index;

export * from './data';
export * from './common';
export * from './test';