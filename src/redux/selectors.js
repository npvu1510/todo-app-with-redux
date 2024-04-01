import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;

export const searchSelector = (state) => state.filters.search;

export const statusSelector = (state) => state.filters.status;

export const filtersSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  (todoList, search, status) =>
    todoList.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (status !== 'All'
          ? status === 'Completed'
            ? item.completed
            : !item.completed
          : true)
    )
);
