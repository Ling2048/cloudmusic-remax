import { combineReducers } from 'redux'
import test from './test'
import * as data from './data'
import * as common from './common'

const reducers = {
  test,
  ...data,
  ...common
}

export type reducers = typeof reducers

export default combineReducers(reducers)