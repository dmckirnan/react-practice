import { combineReducers } from 'redux';
import counter from './counter';

const counterApp = combineReducers({
  counter
})

export default counterApp


/*

Redux To-Do Example #1

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp

*/
