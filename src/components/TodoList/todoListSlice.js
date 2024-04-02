import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   { id: 1, name: 'Learn React', priority: 'High', completed: false },
//   { id: 2, name: 'Learn Redux', priority: 'Medium', completed: true },
//   { id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false },
// ];

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
  initialState: { status: 'idle', todos: [] },
  reducers: {
    // addItem: (state, action) => {
    //   state.push({
    //     id: state.at(-1).id + 1,
    //     ...action.payload,
    //     completed: false,
    //   });
    // },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },

  extraReducers: (builder) => {
    //FETCH MIDDLEWARE
    builder
      .addCase(fetchTodosThunk.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload;
      })

      // ADD ITEM MIDDLEWARE
      .addCase(addItemThunk.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addItemThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        state.todos.push(action.payload);
      })
      .addCase(toggleCompletedThunk.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(toggleCompletedThunk.fulfilled, (state, action) => {
        const { id } = action.payload;

        state.status = 'idle';
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
      });

    // TOGGLE COMPLETED
  },
});

// REDUX MIDDLEWARE (THUNK)
export const addTodoMiddleware = (data) => (dispatch, getState) => {
  console.log('[addTodoMiddleware]', data);
  console.log(getState().todoList);

  dispatch(todoListSlice.actions.addItem(data));
};
export default todoListSlice;

// REDUX ASYNC MIDDLEWARE (ASYNC THUNK)
export const fetchTodosThunk = createAsyncThunk(
  'todoList/fetchTodos',
  async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();

    return data.todos;
  }
);

export const addItemThunk = createAsyncThunk(
  'todoList/addItem',
  async (todo) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(todo),
    });

    const data = await res.json();

    return data.todo;
  }
);

export const toggleCompletedThunk = createAsyncThunk(
  'todoList/toggleCompleted',
  async (id) => {
    const res = await fetch(`/api/todos/${id}`, { method: 'PATCH' });
    const data = await res.json();

    return data.todo;
  }
);
