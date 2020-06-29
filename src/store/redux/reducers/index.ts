import { combineReducers } from 'redux'
import test from './test'
import data from './data'

const reducers = {
  test,
  data
}

export type reducers = typeof reducers

export default combineReducers(reducers)