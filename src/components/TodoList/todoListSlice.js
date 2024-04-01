import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Learn React', priority: 'High', completed: false },
  { id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
  { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false },
];

// const todoListReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case 'todoList/addItem':
//       return [
//         ...state,
//         {
//           id: state.at(-1).id + 1,
//           ...action.payload,
//           completed: false,
//         },
//       ];

//     case 'todoList/toggleComplete':
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, completed: !item.completed }
//           : item
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push({
        id: state.at(-1).id + 1,
        ...action.payload,
        completed: false,
      });
    },

    toggleComplete: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export default todoListSlice;
