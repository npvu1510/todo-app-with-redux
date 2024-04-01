// const initalState = {
//   filters: {
//     search: '',
//     status: 'All',
//     priority: [],
//   },

//   todoList: [
//     { id: 1, name: 'Learn React', priority: 'High', completed: false },
//     { id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
//     { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false },
//   ],
// };

// const rootReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case 'todoList/addItem':
//       return {
//         ...state,
//         todoList: [
//           ...state.todoList,
//           {
//             id: state.todoList.at(-1).id + 1,
//             ...action.payload,
//             completed: false,
//           },
//         ],
//       };

//     case 'filters/setSearchContent':
//       return {
//         ...state,
//         filters: { ...state.filters, search: action.payload },
//       };

//     case 'filters/setStatus':
//       return {
//         ...state,
//         filters: { ...state.filters, status: action.payload },
//       };

//     case 'filters/setPriority':
//       return {
//         ...state,
//         filters: { ...state.filters, priority: action.payload },
//       };
//     default:
//       return state;
//   }

//   // console.log(action);
//   // return state;
// };

import filterSlice from '../components/Filters/filterSlice.js';
import todoListSlice from '../components/TodoList/todoListSlice.js';

const rootReducer = (state = {}, action) => {
  return {
    filters: filterSlice(state.filters, action),
    todoList: todoListSlice(state.todoList, action),
  };
};

export default rootReducer;
