import * as data from './data';
import * as common from './common';
import * as player from './player';
import * as test from './test';

const index = {
  data,
  common,
  player,
  test
}

export type actions = typeof index;

export * from './data';
export * from './common';
export * from './player';
export * from './test';