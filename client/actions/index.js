export const addCounter = () => ({
  type: 'ADD_COUNTER',
  payload: 1
});

export const removeCounter = () => ({
  type: 'REMOVE_COUNTER',
  payload: 1
});

/* 

Example Actions from Redux To-Do

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

*/
