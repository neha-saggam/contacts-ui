// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }
// ​
// export default todos;
const initialState = {
  contacts: [],
  completed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CONTACTS_SUCCESSFUL':
      return {
        ...state,
        contacts: action.payload,
        completed: true
      };

    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        contacts: action.payload,
        completed: false
      }
  }
  // i dont care about the action because it is not inside my
  // list of actions I am interested int (case statements inside the switch)
  return state;
}
