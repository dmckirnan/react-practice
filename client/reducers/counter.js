const counter = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_COUNTER':
      return newState = state + action.payload;
    case 'REMOVE_COUNTER':
      return newState = state - action.payload;
    default:
      return state
  }
}

export default counter;


/*
  Redux To-Do Example #1

  const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      )
    default:
      return state
  }
}

export default todos

*/

/*

Redux To-Do Example #2

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

*/