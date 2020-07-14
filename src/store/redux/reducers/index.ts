import { combineReducers } from 'redux'
import test from './test'
import * as data from './data'
import * as common from './common'
import * as player from './player'

const reducers = {
  test,
  ...data,
  ...common,
  ...player
}

export type reducers = typeof reducers

export default combineReducers(reducers)