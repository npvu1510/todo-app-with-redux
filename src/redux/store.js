// import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';

// import rootReducer from './reducer';

// const enhancer = composeWithDevTools();
// const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';

import todoListSlice from '../components/TodoList/todoListSlice';

import filtersSlice from '../components/Filters/filterSlice';

const store = configureStore({
  reducer: { todoList: todoListSlice.reducer, filters: filtersSlice.reducer },
});

export default store;
